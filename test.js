const test = require('ava')
const m = require('.')

test('returns true for a builtin module', async t => {
  const res = await m('fs')
  t.true(res)
})

test('returns true for an existing module', async t => {
  const res = await m('miny')
  t.true(res)
})

test('returns false for an unexisting module', async t => {
  const res = await m('i-hope-this-does-not-exist')
  t.false(res)
})

test('returns false for an empty name', async t => {
  const res = await m('')
  t.false(res)
})

test('returns false for an undefined name', async t => {
  const res = await m()
  t.false(res)
})

test('returns false for a null name', async t => {
  const res = await m(null)
  t.false(res)
})
