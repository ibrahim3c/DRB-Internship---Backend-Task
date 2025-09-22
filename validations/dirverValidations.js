import { body } from 'express-validator';

export const createDriverValidation = [
  body('id').isInt().withMessage('ID must be an integer'),
  body('name').notEmpty().withMessage('Name is required'),
  body('licenseType').isIn(['A', 'B', 'C']).withMessage('Invalid license type'),
  body('availability').isBoolean().withMessage('Availability must be true or false')
];
