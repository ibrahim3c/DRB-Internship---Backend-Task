import { validationResult } from 'express-validator';
import httpStatusText from '../utils/httpStatusText';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status:httpStatusText.FAIL, errors: errors.array() });
  }
  next();
};
