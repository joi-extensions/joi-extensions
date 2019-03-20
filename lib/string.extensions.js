const {ObjectId} = require('bson')

/**
 * @property {Function} objectId
 */
module.exports = (joi) => ({
  base: joi.string(),
  name: 'string',
  language: {
    objectId: 'must be a valid ObjectId',
    colorHexCode: 'must be a valid color hex code'
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
    },
    {
      name: 'colorHexCode',
      validate (params, value, state, options) {
        if (!(value && /^#[0-9a-fA-F]{6}$/.test(value))) {
          return this.createError('string.colorHexCode', {value}, state, options)
        }

        return value
      }
    }
  ]
})
