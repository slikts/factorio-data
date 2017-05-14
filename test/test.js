const test = require('tape')
const path = require('path')

const { parseFile, filterCalls, parseNode, getArg, readFile, extractData } = require('..')

const asset = filename => path.join('test/assets', filename)

test('parse file', t => {
  const ast = parseFile(asset('recipe.lua'))
  t.equal(ast.type, 'Chunk')
  t.end()
})

test('filter calls', t => {
  const { body } = parseFile(asset('recipe.lua'))
  const [{ type }] = filterCalls(body)
  t.equal(type, 'CallStatement')
  t.end()
})

test('get arg', t => {
  const [call] = filterCalls(parseFile(asset('recipe.lua')).body)
  const { type } = getArg(call)
  t.equal(type, 'TableConstructorExpression')
  t.end()
})

test('parse node', t => {
  const [call] = filterCalls(parseFile(asset('recipe.lua')).body)
  const data = parseNode(getArg(call))
  const { stringify, parse } = JSON
  t.equal(stringify(data), stringify(parse(readFile('test/assets/recipe.json'))))
  t.end()
})

test('extract data', t => {
  t.plan(1)
  const data = extractData(asset('recipe.lua'))
  const { stringify, parse } = JSON
  t.equal(stringify(data), stringify([parse(readFile(asset('recipe.json')))]))
})
