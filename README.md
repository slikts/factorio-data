[![NPM version](http://badge.fury.io/js/factorio-data.svg)](http://badge.fury.io/js/factorio-data)
[![GitHub version](https://badge.fury.io/gh/slikts%2Ffactorio-data.svg)](https://badge.fury.io/gh/slikts%2Ffactorio-data)
[![Dependency Status](https://david-dm.org/slikts/factorio-data.svg)](https://david-dm.org/slikts/factorio-data)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Build Status](https://travis-ci.org/slikts/factorio-data.svg?branch=master)](https://travis-ci.org/slikts/factorio-data) [![Greenkeeper badge](https://badges.greenkeeper.io/slikts/factorio-data.svg)](https://greenkeeper.io/)

# factorio-data

Factorio prototype data in JSON format.

## Using from Node.js
```sh
npm install --save factorio-data
```

```js
const recipes = require('factorio-data/data/0.15.12/recipes')
// or alternatively
require('factorio-data/data/latest-experimental/recipes')
require('factorio-data/data/latest-stable/recipes')
```

## Using from other languages

File path example: `node_modules/factorio-data/data/latest-experimental/recipes.json`

## Generating
```sh
npm install --global factorio-data
GAME_DIR=example/Factorio
factorio-data $GAME_DIR --save # save to ./data/$GAME_VERSION
```
