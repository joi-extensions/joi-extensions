const BaseJoi = require('joi')

const {ArrayExtensions} = require('../lib')
const Joi = BaseJoi.extend(ArrayExtensions)

describe('array extensions', () => {
  describe('even()', () => {
    const schema = Joi.array().even()

    it('should be valid. The input is an array of even length. Expected even length.', () => {
      const value = new Array(2).fill('w')
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toEqual(value)
    })

    it('should be invalid. The input is an array of odd length. Expected even length.', () => {
      const value = new Array(3).fill('w')
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must have even length')
      expect(result.value).toEqual(value)
    })
  })

  describe('odd()', () => {
    const schema = Joi.array().odd()

    it('should be valid. Input is an array of odd length. Expected odd length.', () => {
      const value = new Array(3).fill('w')
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toEqual(value)
    })

    it('should be invalid. Input is an array of even length. Expected odd length.', () => {
      const value = new Array(2).fill('w')
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" must have odd length')
      expect(result.value).toEqual(value)
    })
  })
})
