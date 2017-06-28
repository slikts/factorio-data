const { assign } = Object

const defaultParser = ({ value }) => value

const typeParsers = {}

// Note: following Ast types are used in the lua files and will result in null value in json
// - CallExpression
// - Identifier
// - LogicalExpression
// - MemberExpression
// - TableCallExpression

const parseNode = node => {
  const { type } = node
  const parser = typeParsers[type] || defaultParser
  return parser(node)
}

const dictReducer = fields =>
  fields.reduce((a, { key: { name }, value }) => assign(a, { [name]: parseNode(value) }), {})

const listReducer = fields => fields.reduce((a, { value }) => a.concat([parseNode(value)]), [])

assign(typeParsers, {
  BinaryExpression({ left, operator, right }) {
    const impl = {
      '*': (l, r) => l * r,
      '+': (l, r) => l + r,
      '-': (l, r) => l - r,
      '/': (l, r) => l / r,
    }[operator];
    if (impl) {
      return impl(parseNode(left), parseNode(right))
    }
  },
  TableConstructorExpression({ fields }) {
    const z = fields.every(({ key }) => key)
    const reducer = z ? dictReducer : listReducer
    return reducer(fields)
  },
  UnaryExpression({ argument, operator }) {
    if (operator === '-') {
      return -parseNode(argument)
    }
  },
})

module.exports = {
  parseNode,
}
