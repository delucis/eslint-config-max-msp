# eslint-config-max-msp

[![npm version](https://img.shields.io/npm/v/eslint-config-max-msp.svg)](https://www.npmjs.com/package/eslint-config-max-msp) [![Build Status](https://travis-ci.com/delucis/eslint-config-max-msp.svg?branch=latest)](https://travis-ci.com/delucis/eslint-config-max-msp) [![Coverage Status](https://coveralls.io/repos/github/delucis/eslint-config-max-msp/badge.svg?branch=latest)](https://coveralls.io/github/delucis/eslint-config-max-msp?branch=latest) [![Known Vulnerabilities](https://snyk.io/test/npm/eslint-config-max-msp/badge.svg)](https://snyk.io/test/npm/eslint-config-max-msp) [![Greenkeeper badge](https://badges.greenkeeper.io/delucis/eslint-config-max-msp.svg)](#)

> 🔎 ESLint configuration for Cycling 74’s Max/MSP

## Installation

Add `eslint` and this config to your package dependencies:

```sh
npm install -D eslint eslint-config-max-msp
```

## What does this do?

This is a custom configuration for [ESLint][eslint]. It can help you write JavaScript for use with the `js` and `jsui` objects in [Cycling 74][c74]’s Max software by helping you catch errors in your text editor or on the command line. So far it includes:

- definitions for the [global variables](lib/globals.js) available inside Max so that ESLint won’t complain about “undefined” variables
- some basic [rules](lib/rules.js) that match common JavaScript usage in Max/MSP

## Usage

> 💡 If you haven’t used ESLint before, you might want to read [“Getting Started with ESLint”][eslintro]

To use this configuration, you need to include an ESLint configuration file in your project. Below are example configuration files written in JSON and YAML. You can use whichever format you are more comfortable with and ESLint also supports [JavaScript configuration files][eslconfig].

### `.eslintrc.json`

```json
{
  "extends": [ "max-msp" ]
}
```

### `.eslintrc.yml`

```yml
---
  extends:
    - max-msp
```

## Contributing

If you’re interested in helping out, wonderful! There are some guidelines on [how to contribute](CONTRIBUTING.md) and a [code of conduct][COC] outlining how to be supportive of one another.

[eslint]: https://eslint.org/
[c74]: https://cycling74.com/
[eslintro]: https://eslint.org/docs/user-guide/getting-started
[eslconfig]: https://eslint.org/docs/user-guide/configuring#configuration-file-formats
[COC]: CODE_OF_CONDUCT.md
