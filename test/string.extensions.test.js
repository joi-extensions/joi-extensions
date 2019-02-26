const {ObjectId} = require('bson')
const BaseJoi = require('joi')

const JoiStringExtensions = require('../lib/string.extensions')
const Joi = BaseJoi.extend(JoiStringExtensions)

describe('string extensions', () => {
  const validId = ObjectId.createPk()
  const invalidId = 'mock-id'

  const schema = Joi.string().objectId()

  it('should be valid. Input is string. Output is ObjectId.', () => {
    const result = Joi.validate(String(validId), schema)

    expect(result.error).toBeNull()
    expect(result.value instanceof ObjectId).toBe(true)
    expect(result.value).toEqual(validId)
  })

  it('should be valid. Input is string. Output is string.', () => {
    const result = Joi.validate(String(validId), schema, {convert: false})

    expect(result.error).toBeNull()
    expect(typeof result.value).toBe('string')
    expect(result.value).toEqual(String(validId))
  })

  it('should be valid. Input is undefined.', () => {
    const result = Joi.validate(undefined, schema)

    expect(result.error).toBe(null)
    expect(result.value).toBeUndefined()
  })

  it('should be invalid. Input is invalid string.', () => {
    const result = Joi.validate(invalidId, schema)

    expect(result.error.details[0].message).toBe('"value" must to be a valid ObjectId')
    expect(result.value).toEqual(invalidId)
  })

  it('should be invalid. Input is null', () => {
    const result = Joi.validate(null, schema)

    expect(result.error.details[0].message).toBe('"value" must be a string')
    expect(result.value).toEqual(null)
  })
})
