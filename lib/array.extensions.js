/**
 * @property {Function} even
 * @property {Function} odd
 */
module.exports = (joi) => ({
  type: 'array',
  base: joi.array(),
  messages: {
    'array.even': '{{#label}} must have even length',
    'array.odd': '{{#label}} must have odd length'
  },
  rules: {
    even: {
      validate (value, helpers) {
        if (value.length % 2 !== 0) {
          return helpers.error('array.even', {value})
        }

        return value
      }
    },
    odd: {
      validate (value, helpers) {
        if (value.length % 2 !== 1) {
          return helpers.error('array.odd', {value})
        }

        return value
      }
    }
  }
})
