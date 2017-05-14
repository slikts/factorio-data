#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { extractData, debug } = require('..')
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['save', 'debug'],
  default: {
    dataDir: './data',
  },
})
const globby = require('globby')

const makeDir = name => {
  if (fs.existsSync(name)) {
    return
  }
  fs.mkdirSync(name)
  debug('made dir:', name)
}

const writeFile = (name, contents) => {
  fs.writeFileSync(name, contents)
  debug('wrote file:', name)
}

const saveData = () => {}

const stringify = x => JSON.stringify(x, null, 2)

const flatten = arr => [].concat(...arr)

const main = async ({ save, _: [gameDir], dataDir, debug: dump }) => {
  debug('params:', { save, gameDir, dataDir, dump })
  const basePath = path.join(gameDir, 'data/base')
  const dataPath = path.join(basePath, 'prototypes/**/*.lua')
  debug('data source:', dataPath)
  const allFiles = await globby(dataPath)
  debug('file count:', allFiles.length)
  const fileGroups = allFiles
    .map(pathname => [path.basename(path.dirname(pathname)), pathname])
    .map(([group, files]) => [group === 'prototypes' ? 'other' : group, files])
    .reduce(
      (a, [group, file]) => a.set(group, a.has(group) ? a.get(group).concat(file) : [file]),
      new Map()
    )
  debug('groups:', [...fileGroups.keys()].join(', '))
  const { version } = JSON.parse(fs.readFileSync(path.join(basePath, 'info.json'), 'utf8'))
  debug('base mod version:', version)
  const extracted = [...fileGroups]
    .map(([group, groupFiles]) => [group, flatten(groupFiles.map(name => extractData(name)))])
    .reduce((a, [group, data]) => Object.assign(a, { [group]: data }), {})
  debug('data extracted')
  if (dump) {
    writeFile('debug.json', stringify(extracted))
  }
  if (save) {
    makeDir(dataDir)
    const targetDir = path.join(dataDir, version)
    makeDir(targetDir)
    Object.entries(extracted).forEach(([group, data]) => {
      const file = path.join(targetDir, `${group}.json`)
      writeFile(file, stringify(data))
    })
  }
}

if (require.main === module) {
  main(argv).catch(console.error)
}
