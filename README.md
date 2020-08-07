<h1 align="center">
	<img width="320" src="media/logo.jpeg" alt="Joi extensions">
	<br>
	<br>
</h1>

Extensions for Joi validator.

[![Build Status](https://travis-ci.org/joi-extensions/joi-extensions.svg?branch=master)](https://travis-ci.org/joi-extensions/joi-extensions.svg?branch=master)
[![npm](https://img.shields.io/npm/v/@joi-extensions/joi-extensions.svg)](https://www.npmjs.com/package/@joi-extensions/joi-extensions) 
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/AlbertHambardzumyan/fraction-js/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/joi-extensions/joi-extensions.svg)](https://github.com/joi-extensions/joi-extensions/issues)

# Installation 
```bash
 npm install @joi-extensions/joi-extensions
```

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi')
const {AnyExtensions} = require('@joi-extensions/joi-extensions')
const Joi = BaseJoi.extend(AnyExtensions)

const schema = Joi.any().sizeof(20)
````

```js
const BaseJoi = require('joi')
const {StringExtensions} = require('@joi-extensions/joi-extensions')
const Joi = BaseJoi.extend(StringExtensions)

const schema = Joi.string().objectId()
````

```js
const BaseJoi = require('joi')
const {ArrayExtensions} = require('@joi-extensions/joi-extensions')
const Joi = BaseJoi.extend(ArrayExtensions)

const schema = Joi.array().even()
````

# API
See the detailed [API Reference](API.md).
