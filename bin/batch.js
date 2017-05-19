const os = require('os')
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const shell = require('shelljs')
const { packageName } = require('..')
const debug = require('debug')(`${packageName} batch`)
const extract = require('./extract')

const rp = require('request-promise-native')
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['fetchVersions'],
  default: {
    headlessDir: path.join(os.homedir(), 'factorio'),
    fetchHeadless: true,
  },
})

const stringify = x => JSON.stringify(x, null, 2)

const getPage = type =>
  rp(`https://www.factorio.com/download-headless/${type}`).then(html => [type, html])
const getAllPages = (types = ['stable', 'experimental']) =>
  Promise.all(types.map(type => getPage(type)))

const cachePath = path.join(os.tmpdir(), `${packageName}.json`)

const fetchHeadless = (version, dir) => {
  const versionPath = path.join(dir, version)
  if (fs.existsSync(versionPath)) {
    debug('headless version exists:', version)
    return
  }
  shell.cd(dir)
  shell.mkdir(version)
  shell.cd(version)
  const url = `https://www.factorio.com/get-download/${version}/headless/linux64`
  const archivePath = `${version}.tar.xz`
  debug('downloading version:', version)
  shell.exec(`wget -O ${archivePath} -nv -- ${url}`)
  shell.exec(`tar xf ${archivePath}`)
}

const parseVersions = data =>
  data
    .map(([type, html]) => {
      const $ = cheerio.load(html)
      return [
        type,
        Array.from($('h3').contents()).map(({ data: text }) => text.match(/(\d+\.?)+/)[0]),
      ]
    })
    .reduce((a, [type, versions]) => Object.assign(a, { [type]: versions }), {})

const fetchVersions = async () => {
  const data = await getAllPages()
  fs.writeFileSync(cachePath, stringify(data), 'utf8')
  debug('data fetched')
}

const getVersionPages = () => JSON.parse(fs.readFileSync(cachePath, 'utf8'))

const main = async params => {
  debug('params:', params)
  debug('cache path:', cachePath)

  if (params.fetchVersions) {
    await fetchVersions().catch(err => debug('fetch error:', err))
  }

  const versionData = parseVersions(getVersionPages())
  debug('versions:', versionData)

  const { headlessDir } = params

  Object.entries(versionData).forEach(([type, versions]) => {
    if (params.fetchHeadless) {
      versions.forEach(ver => fetchHeadless(ver, headlessDir))
    }
    versions.forEach(ver => {
      const verPath = path.join(headlessDir, ver, 'factorio')
      extract({ save: true, _: [verPath] }).catch(console.error)
    })
  })
}

if (require.main === module) {
  main(argv).catch(console.error)
}
