const test = require('ava')
const eslint = require('eslint')
const baseConfig = require('../')

const CLIEngine = eslint.CLIEngine
const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig
})
const lint = s => cli.executeOnText(s)

const validJS = `inlets = 2;

function msg_int () {
  var int = arrayfromargs(arguments);
  post(int.join(''));
  post();
}
`

const missingSemi = `function list () {
  post()
}
`

const excessIndent = `function list () {
    post();
}
`

const undeclaredGlobal = `function msg_float () {
  bloom = 'marvellous';
}
`

test('can lint with config', t => {
  const linted = lint(validJS)
  t.is(linted.errorCount, 0)
})

test('errors on missing semi-colon', t => {
  const linted = lint(missingSemi)
  t.is(linted.errorCount, 1)
  t.is(linted.fixableErrorCount, 1)
  t.is(linted.results[0].messages[0].ruleId, 'semi')
  t.is(linted.results[0].messages[0].severity, 2)
})

test('errors on bad indentation', t => {
  const linted = lint(excessIndent)
  t.is(linted.errorCount, 1)
  t.is(linted.fixableErrorCount, 1)
  t.is(linted.results[0].messages[0].ruleId, 'indent')
  t.is(linted.results[0].messages[0].severity, 2)
})

test('errors on undeclared globals', t => {
  const linted = lint(undeclaredGlobal)
  t.is(linted.errorCount, 1)
  t.is(linted.fixableErrorCount, 0)
  t.is(linted.results[0].messages[0].ruleId, 'no-undef')
  t.is(linted.results[0].messages[0].severity, 2)
})
