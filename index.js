'use strict'

const { _builtinLibs } = require('repl')
const { head } = require('got')

const registry = 'https://registry.npmjs.org'

function checkRegistry (name) {
  return head(`${registry}/${name.toLowerCase()}`)
    .then(() => true)
    .catch(err => err.statusCode !== 404)
}

function isNodeLibrary (name) {
  return _builtinLibs.includes(name)
}

module.exports = name => {
  if (typeof name !== 'string' || !name) {
    return false
  }
  if (isNodeLibrary(name)) {
    return true
  }

  return checkRegistry(name)
}
