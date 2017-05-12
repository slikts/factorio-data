const test = require('tape')

const { readLua, parseNode } = require('..')

test('read', t => {
  t.plan(1)
  readLua('test/recipe.lua')
    .then(ast => {
      const parsed = parseNode(ast.body[0].expression.arguments[0])
      t.equal(
        JSON.stringify(parsed),
        JSON.stringify({
          type: 'recipe',
          name: 'fast-transport-belt',
          enabled: false,
          ingredients: [['iron-gear-wheel', 5], ['transport-belt', 1]],
          result: 'fast-transport-belt',
        })
      )
    })
    .catch(console.error)
})
