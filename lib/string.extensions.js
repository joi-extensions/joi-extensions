const {ObjectId} = require('bson')

/**
 * @property {Function} objectId
 * @property {Function} colorHexCode
 */
module.exports = (joi) => ({
  type: 'string',
  base: joi.string(),
  messages: {
    'string.objectId': '{{#label}} must be a valid ObjectId',
    'string.colorHexCode': '{{#label}} must be a valid color hex code'
  },
  rules: {
    objectId: {
      validate (value, helpers) {
        if (!ObjectId.isValid(value)) {
          return helpers.error('string.objectId', {value})
        }

        return value
      }
    },
    colorHexCode: {
      validate (value, helpers) {
        if (!(value && /^#[0-9a-fA-F]{6}$/.test(value))) {
          return helpers.error('string.colorHexCode', {value})
        }

        return value
      }
    }
  }
})
