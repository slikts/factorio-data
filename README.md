[![NPM version](http://badge.fury.io/js/factorio-data.svg)](http://badge.fury.io/js/factorio-data)
[![GitHub version](https://badge.fury.io/gh/slikts%2Ffactorio-data.svg)](https://badge.fury.io/gh/slikts%2Ffactorio-data)
[![Dependency Status](https://david-dm.org/slikts/factorio-data.svg)](https://david-dm.org/slikts/factorio-data)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Build Status](https://travis-ci.org/slikts/factorio-data.svg?branch=master)](https://travis-ci.org/slikts/factorio-data)

# factorio-data

Factorio prototype data in JSON format.

## Using
```sh
npm install --save factorio-data
```
```js
const recipes = require('factorio-data/data/0.15.10/recipes.json')
```

## Generating
```sh
npm install --global factorio-data
GAME_DIR=example/Factorio
factorio-data $GAME_DIR --save # save to ./data/$GAME_VERSION
```
