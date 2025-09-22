import { body } from 'express-validator';

export const createRouteValidation = [
  body('startLocation').notEmpty().withMessage('Start location is required'),
  body('endLocation').notEmpty().withMessage('End location is required'),
  body('distance').isFloat({ gt: 0 }).withMessage('Distance must be a positive number'),
  body('estimatedTime').isFloat({ gt: 0 }).withMessage('Estimated time must be a positive number')
];
