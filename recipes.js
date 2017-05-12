const fs = require('fs')
const { parse: parseLua } = require('luaparse')
const globby = require('globby')

const { assign } = Object

const readLua = filename => parseLua(fs.readFileSync(filename, 'utf8'), { comments: false })

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

const parseFile = async filename => parseNode(readLua(filename).body[0].expression.arguments[0])

const parseRecipes = async recipePath => {
  const files = await globby([recipePath])
  const recipes = [].concat(...(await Promise.all(files.map(name => parseFile(name)))))
  return recipes.reduce((a, b) => assign(a, { [b.name]: b }), {})
}

module.exports = {
  parseRecipes,
  readLua,
  parseNode,
}
