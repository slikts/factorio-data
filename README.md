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
