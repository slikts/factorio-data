#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { parseRecipes } = require('..')
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['save'],
})

const { log, error } = console

const main = async ({ save, _: [gameDir] }) => {
  const basePath = path.join(gameDir, 'data/base')
  const recipePath = path.join(basePath, 'prototypes/recipe/*.lua')
  error(`Reading recipes from ${recipePath}`)
  const { version } = JSON.parse(fs.readFileSync(path.join(basePath, 'info.json'), 'utf8'))
  error('Base mod version %s', version)
  const parsed = await parseRecipes(recipePath)
  const json = JSON.stringify(parsed, null, 2)
  if (save) {
    const resultFile = `recipes-${version}.json`
    error(`Saving to ${resultFile}`)
    fs.writeFileSync(resultFile, json)
  } else {
    log(json)
  }
}

if (require.main === module) {
  main(argv).catch(console.error)
}
