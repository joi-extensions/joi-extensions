const {ObjectId} = require('bson')

/**
 * @property {Function} objectId
 */
module.exports = (joi) => ({
  base: joi.string(),
  name: 'string',
  language: {
    objectId: 'must to be a valid ObjectId'
  },
  rules: [
    {
      name: 'objectId',
      validate (params, value, state, options) {
        if (!ObjectId.isValid(value)) {
          return this.createError('string.objectId', {value}, state, options)
        }

        if (options.convert) {
          return new ObjectId(value)
        }

        return value
      }
    }
  ]
})
