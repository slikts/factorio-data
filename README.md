# factorio-recipes


## Generating recipe JSON
```sh
npm install --global factorio-recipes
GAME_DIR = example/Factorio
factorio-recipes $GAME_DIR>recipes.json
# or alternatively
factorio-recipes $GAME_DIR --save # will save to recipes-$VERSION.json
```

## Importing premade JSON
```sh
npm install --save factorio-recipes
```
```js
const recipes = require('factorio-recipes/recipes-0.15.10.json')
```
