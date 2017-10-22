const { _builtinLibs } = require('repl')
const { head } = require('got')

const registry = 'https://registry.npmjs.org'

// https://github.com/sindresorhus/npm-name/blob/master/index.js
const request = name => {
  return head(`${registry}/${name.toLowerCase()}`)
    .then(() => true)
    .catch(err => {
      if (err.statusCode === 404) {
        return false
      }

      throw err
    })
}

module.exports = name => {
  if (typeof name !== 'string' || !name) {
    return false
  }
  if (_builtinLibs.includes(name)) {
    return true
  }

  return request(name)
}
