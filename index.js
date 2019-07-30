const globals = require('./lib/globals')

const PLUGIN_NAME = 'max-msp'

module.exports = {
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: [PLUGIN_NAME],
      env: [PLUGIN_NAME],
      rules: {
        'no-unused-vars': ['error', { vars: 'local' }]
      }
    }
  },
  environments: {
    [PLUGIN_NAME]: {
      globals,
      parserOptions: {
        ecmaVersion: 3
      }
    }
  }
}
