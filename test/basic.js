import test from 'ava'
import m from '../'

test('exports ESLint config object', t => {
  t.is(typeof m, 'object')
  t.true(Array.isArray(m.extends))
  t.is(typeof m.globals, 'object')
  t.is(typeof m.rules, 'object')
  t.is(typeof m.parserOptions, 'object')
})
