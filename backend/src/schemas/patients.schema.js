import Joi from 'joi'

export const createPatientSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required'
  }),
  owner: Joi.string().required().messages({
    'string.empty': 'Owner is required',
    'any.required': 'Owner is required'
  }),
  species: Joi.string().valid('canine', 'feline').required().messages({
    'any.only': 'Species must be either "canine" or "feline"',
    'any.required': 'Species is required'
  }),
  user: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
    'string.pattern.base': 'User must be a valid ObjectId',
    'any.required': 'User reference is required'
  }),
  sex: Joi.alternatives().try(
    Joi.string().valid('male', 'female'),
    Joi.string().valid('').strip()
  ).messages({
    'any.only': 'Sex must be either "male" or "female"',
    'string.base': 'Sex must be a string'
  }),
  birthDate: Joi.string().optional().messages({
    'string.base': 'BirthDate must be a string'
  }),
  breed: Joi.string().optional().messages({
    'string.base': 'Breed must be a string'
  }),
  history: Joi.array().items(
    Joi.object({
      _id: Joi.string().optional().messages({
        'string.base': 'ID must be a string'
      }),
      dateTime: Joi.string().required().messages({
        'string.base': 'DateTime must be a string',
        'any.required': 'DateTime is required'
      }),
      entry: Joi.string().required().messages({
        'string.base': 'Entry must be a string',
        'any.required': 'Entry is required'
      })
    })
  ).default([]).messages({
    'array.base': 'History must be an array of entries'
  })
});

export const updatePatientSchema = Joi.object({
  name: Joi.string().messages({
    'string.base': 'Name must be a string'
  }),
  owner: Joi.string().messages({
    'string.base': 'Owner must be a string'
  }),
  species: Joi.string().valid('canine', 'feline').messages({
    'any.only': 'Species must be either "canine" or "feline"',
    'string.base': 'Species must be a string'
  }),
  user: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).messages({
    'string.pattern.base': 'User must be a valid ObjectId',
    'string.base': 'User must be a string'
  }),
  sex: Joi.alternatives().try(
    Joi.string().valid('male', 'female'),
    Joi.string().valid('').strip()
  ).messages({
    'any.only': 'Sex must be either "male" or "female"',
    'string.base': 'Sex must be a string'
  }),
  birthDate: Joi.string().messages({
    'string.base': 'BirthDate must be a string'
  }),
  breed: Joi.string().messages({
    'string.base': 'Breed must be a string'
  }),
  history: Joi.array().items(
    Joi.object({
      _id: Joi.string().optional().messages({
        'string.base': 'ID must be a string'
      }),
      dateTime: Joi.string().required().messages({
        'string.base': 'DateTime must be a string',
        'any.required': 'DateTime is required'
      }),
      entry: Joi.string().required().messages({
        'string.base': 'Entry must be a string',
        'any.required': 'Entry is required'
      })
    })
  ).default([]).messages({
    'array.base': 'History must be an array of entries'
  })
});
