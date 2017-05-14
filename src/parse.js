const { assign } = Object

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
  parseNode,
}
