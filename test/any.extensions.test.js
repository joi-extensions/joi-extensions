const BaseJoi = require('joi')

const {AnyExtensions} = require('../lib')
const Joi = BaseJoi.extend(AnyExtensions)

describe('any extensions', () => {
  describe('sizeof()', () => {
    const schema = Joi.any().sizeof(20)

    it('should be valid. The input is an object.', () => {
      const value = {foo: 'bar'}
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is an array.', () => {
      const value = [{foo: 'bar'}]
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is a string.', () => {
      const value = 'mock-value'
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is a number.', () => {
      const value = 11
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is a boolean.', () => {
      const value = true
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is a buffer.', () => {
      const value = Buffer.from('Hello', 'utf-8')
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is a null.', () => {
      const value = null
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be valid. The input is an undefined.', () => {
      const value = undefined
      const result = schema.validate(value)

      expect(result.error).toBeUndefined()
      expect(result.value).toBe(value)
    })

    it('should be invalid. The "value" size must be less than or equal to 20.', () => {
      const value = 'hello-world!'
      const result = schema.validate(value)

      expect(result.error.details[0].message).toBe('"value" size must be less than or equal to 20')
      expect(result.value).toEqual(value)
    })
  })
})
