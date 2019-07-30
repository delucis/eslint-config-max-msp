import test from 'ava'
import m from '../'

test('exports ESLint plugin object', t => {
  t.is(typeof m, 'object')
  t.is(typeof m.configs, 'object')
  t.is(typeof m.environments, 'object')
})

test('declares “max-msp” environment', t => {
  const env = m.environments['max-msp']
  t.is(typeof env, 'object')
  t.is(typeof env.globals, 'object')
  t.is(typeof env.parserOptions, 'object')
})

test('declares “recommended” config', t => {
  const conf = m.configs.recommended
  t.is(typeof conf, 'object')
  t.true(Array.isArray(conf.extends))
  t.true(Array.isArray(conf.plugins))
  t.true(Array.isArray(conf.env))
  t.is(typeof conf.rules, 'object')
})
