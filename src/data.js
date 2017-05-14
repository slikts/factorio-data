const fs = require('fs')
const { parse: parseLua } = require('luaparse')

const readFile = filename => fs.readFileSync(filename, 'utf8')

const parseFile = filename => parseLua(readFile(filename), { comments: false })

const filterCalls = (ast, baseName = 'data', memberName = 'extend') =>
  ast.filter(
    node =>
      node.type === 'CallStatement' &&
      node.expression.base.base &&
      node.expression.base.base.name === baseName &&
      node.expression.base.identifier.name === memberName
  )

const getArg = ({ expression: { arguments: [arg] } }) => arg

module.exports = {
  getArg,
  parseFile,
  filterCalls,
  readFile,
}
