# README

A JavaScript helper tool to serialize and deserialize types in JavaScript.
This allows for a generic serialization of e.g. strings, objects, arrays, even functions, etc. to be serialized
and then again deserialized.

**Note that this is not encrypting or otherwise "scrambling" the data - this is purely for transporting
data types into strings, e.g. to communication or HTML parsing**

## Table of Contents

- [README](#readme)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)

## Usage

```import serialize from 'serializeUnserialize';

const configObject = {
  api: true,
  site_name: 'Racoon Inside Out',
  social_networks: [
    'facebook',
    'twitter'
  ]
}

let serialize = serialize.serialize(configObject);

console.log("serialized:", serialize);
console.log("Unserialize:", serialize.unserialize(serialize))

```