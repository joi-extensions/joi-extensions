const {ObjectId} = require('bson')
const BaseJoi = require('joi')

const {StringExtensions} = require('../lib')
const Joi = BaseJoi.extend(StringExtensions)

describe('string extensions', () => {
  describe('objectId()', () => {
    const schema = Joi.string().objectId()

    it('should be valid. The input is a valid ObjectId.', () => {
      const value = String(ObjectId.createPk())
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be invalid. The input is invalid ObjectId.', () => {
      const value = 'mock-id'
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must be a valid ObjectId')
      expect(result.value).toEqual(value)
    })

    it('should be invalid. The input is null', () => {
      const value = null
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must be a string')
      expect(result.value).toBeNull()
    })
  })

  describe('colorHexCode()', () => {
    const schema = Joi.string().colorHexCode()

    it('should be valid. The input is a valid color hex code.', () => {
      const value = '#ffffff'
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toEqual(value)
    })

    it('should be invalid. The value must be a string.', () => {
      const value = null
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must be a string')
      expect(result.value).toEqual(value)
    })

    it('should be invalid. The value must be a valid color hex code.', () => {
      const value = 'mock-color'
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must be a valid color hex code')
      expect(result.value).toEqual(value)
    })
  })
})
