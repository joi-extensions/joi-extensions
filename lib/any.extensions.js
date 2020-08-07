const sizeof = require('object-sizeof')

/**
 * @property {Function} sizeof
 */
module.exports = (joi) => ({
  type: 'any',
  base: joi.any(),
  messages: {
    'any.sizeof': '{{#label}} size must be less than or equal to {{#limit}}'
  },
  rules: {
    sizeof: {
      method (limit) {
        return this.$_addRule({name: 'sizeof', args: {limit}})
      },
      args: [
        {
          name: 'limit',
          ref: true,
          assert: (value) => typeof value === 'number' && !isNaN(value),
          message: 'must be a number'
        }
      ],
      validate (value, helpers, args) {
        if (sizeof(value) > args.limit) {
          return helpers.error('any.sizeof', {limit: args.limit})
        }

        return value
      }
    }
  }
})
