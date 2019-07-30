# eslint-plugin-max-msp

[![npm version](https://img.shields.io/npm/v/eslint-plugin-max-msp.svg)](https://www.npmjs.com/package/eslint-plugin-max-msp) [![Build Status](https://travis-ci.com/delucis/eslint-plugin-max-msp.svg?branch=master)](https://travis-ci.com/delucis/eslint-plugin-max-msp) [![Coverage Status](https://coveralls.io/repos/github/delucis/eslint-plugin-max-msp/badge.svg?branch=master)](https://coveralls.io/github/delucis/eslint-plugin-max-msp?branch=master) [![Known Vulnerabilities](https://snyk.io/test/npm/eslint-plugin-max-msp/badge.svg)](https://snyk.io/test/npm/eslint-plugin-max-msp) ![Greenkeeper badge](https://badges.greenkeeper.io/delucis/eslint-plugin-max-msp.svg)

> 🔎 Max/MSP JavaScript plugin for [ESLint][eslint]

## Installation

Add `eslint` and this plugin to your package dependencies:

```sh
npm install -D eslint eslint-plugin-max-msp
```

## What does this do?

This is a plugin for [ESLint][eslint]. It can help you write JavaScript for use with the `js` and `jsui` objects in [Cycling 74][c74]’s Max software by helping you catch errors in your text editor or on the command line. So far it includes:

- definitions for the global variables available inside Max so that ESLint won’t complain about “undefined” variables

## Usage

> 💡 If you haven’t used ESLint before, you might want to read [“Getting Started with ESLint”][eslintro]

To use this plugin, include an ESLint configuration file in your project. Below are example configuration files written in JSON and YAML. You can use whichever format you are more comfortable with and ESLint also supports [JavaScript configuration files][eslconfig].

### `.eslintrc.json`

```json
{
  "plugins": [
    "max-msp"
  ],
  "extends": [
    "plugin:max-msp/recommended"
  ]
}
```

### `.eslintrc.yml`

```yml
---
  plugins:
    - max-msp
  extends:
    - plugin:max-msp/recommended
```

[eslint]: https://eslint.org/
[c74]: https://cycling74.com/
[eslintro]: https://eslint.org/docs/user-guide/getting-started
[eslconfig]: https://eslint.org/docs/user-guide/configuring#configuration-file-formats
