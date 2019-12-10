# deep-clone

[![NPM version](https://img.shields.io/npm/v/simple-deep-clone.svg)](https://www.npmjs.com/package/aws-sdk)
[![NPM downloads](https://img.shields.io/npm/dm/simple-deep-clone.svg)](https://www.npmjs.com/package/aws-sdk)

Simple deep clone JavaScript native types, like Object, Array, and primitives.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save simple-deep-clone
```

## Usage

```js
const clone = require('simple-deep-clone');

const profile = { name: 'SaLamTam' };
const newProfile = clone(profile);

newProfile.project = 'deep-clone';

console.log('Old Profile:', profile);
console.log('New Profile:', newProfile);
```
