- [Joi Extensions](#joi-extensions)
  - [`string`](#string)
    - [`string.objectId()`](#stringobjectid)
    - [`string.colorHexCode()`](#stringcolorhexcode)    
  - [`array`](#array)
    - [`array.even()`](#arrayeven)
    - [`array.odd()`](#arrayodd)

## Joi Extensions


### string

#### `string.objectId()`

Requires the string to be valid ObjectId.

```js
const schema = Joi.string().objectId()
```

#### `string.colorHexCode()`

Requires the string to be valid color hex code.

```js
const schema = Joi.string().colorHexCode()
```


### array

#### `array.even()`

Requires the array length to be even.

```js
const schema = Joi.array().even()
```

#### `array.odd()`

Requires the array length to be odd.

```js
const schema = Joi.array().odd()
```
