- [Joi Extensions](#joi-extensions)
    - [`any`](#any)
        - [`any.sizeof(limit)`](#anysizeoflimit)
    - [`string`](#string)
        - [`string.objectId()`](#stringobjectid)
        - [`string.colorHexCode()`](#stringcolorhexcode)
        - [`string.ASCII()`](#stringcolorhexcode)
    - [`array`](#array)
        - [`array.even()`](#arrayeven)
        - [`array.odd()`](#arrayodd)

## Joi Extensions

### any

#### `any.sizeof(limit)`

Requires the size to be less than or equal to limit.

```js
const schema = Joi.any().sizeof(20)
```

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

#### `string.colorHexCode()`

Requires the string to contain only ASCII characters.

```js
const schema = Joi.string().ASCII()
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
