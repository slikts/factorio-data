const { filterCalls, parseFile, getArg } = require('./data')
const { parseNode } = require('./parse')

const extractData = filename =>
  [].concat(...filterCalls(parseFile(filename).body).map(call => parseNode(getArg(call))))

module.exports = {
  extractData,
}
