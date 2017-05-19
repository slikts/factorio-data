const test = require('tape')
const path = require('path')

const { parseFile, filterCalls, parseNode, getArg, readFile, extractData } = require('..')

const fixture = filename => path.join('test/fixtures', filename)

test('parse file', t => {
  const ast = parseFile(fixture('recipe.lua'))
  t.equal(ast.type, 'Chunk')
  t.end()
})

test('filter calls', t => {
  const { body } = parseFile(fixture('recipe.lua'))
  const [{ type }] = filterCalls(body)
  t.equal(type, 'CallStatement')
  t.end()
})

test('get arg', t => {
  const [call] = filterCalls(parseFile(fixture('recipe.lua')).body)
  const { type } = getArg(call)
  t.equal(type, 'TableConstructorExpression')
  t.end()
})

test('parse node', t => {
  const [call] = filterCalls(parseFile(fixture('recipe.lua')).body)
  const data = parseNode(getArg(call))
  const { stringify, parse } = JSON
  t.equal(stringify(data), stringify(parse(readFile(fixture('recipe.json')))))
  t.end()
})

test('extract data', t => {
  t.plan(1)
  const data = extractData(fixture('recipe.lua'))
  const { stringify, parse } = JSON
  t.equal(stringify(data), stringify([parse(readFile(fixture('recipe.json')))]))
})
