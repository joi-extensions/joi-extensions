/**
 * @property {Function} even
 * @property {Function} odd
 */
module.exports = (joi) => ({
  base: joi.array(),
  name: 'array',
  language: {
    even: 'must have even length',
    odd: 'must have odd length'
  },
  rules: [
    {
      name: 'even',
      validate (params, value, state, options) {
        if (value.length % 2 !== 0) {
          return this.createError('array.even', {value}, state, options)
        }

        return value
      }
    },
    {
      name: 'odd',
      validate (params, value, state, options) {
        if (value.length % 2 !== 1) {
          return this.createError('array.odd', {value}, state, options)
        }

        return value
      }
    }
  ]
})
