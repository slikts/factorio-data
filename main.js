const fs = require('fs')
const { parse: parseLua } = require('luaparse')
const pify = require('pify')

const { assign } = Object

const readLua = filename =>
  pify(fs.readFile)(filename, 'utf8').then(data => parseLua(data, { comments: false }))

const defaultParser = ({ value }) => value

const typeParsers = {}

const parseNode = node => {
  const { type } = node
  const parser = typeParsers[type] || defaultParser
  return parser(node)
}

const dictReducer = fields =>
  fields.reduce((a, { key: { name }, value }) => assign(a, { [name]: parseNode(value) }), {})

const listReducer = fields => fields.reduce((a, { value }) => a.concat([parseNode(value)]), [])

assign(typeParsers, {
  TableConstructorExpression({ fields }) {
    const z = fields.every(({ key }) => key)
    const reducer = z ? dictReducer : listReducer
    return reducer(fields)
  },
})

module.exports = {
  readLua,
  parseNode,
}

if (require.main === module) {
  const [, , filename = 'recipe.lua'] = process.argv
  readLua(filename)
    .then(ast => parseNode(ast.body[0].expression.arguments[0]))
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(console.error)
}
