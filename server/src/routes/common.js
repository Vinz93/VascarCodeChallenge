import express from 'express';
import validate from 'express-validation';

import user from '../controllers/user';
import accountState from '../controllers/account-state';
import userValidator from '../services/param_validations/user';
import { catchErrors } from '../helpers/errors';
const router = express.Router(); // eslint-disable-line new-cap

validate.options({
  allowUnknownBody: false,
});

router.route('/users')
  .get(validate(userValidator.readAll), catchErrors(user.readAll));

router.route('/delta-pnl')
  .get(catchErrors(accountState.deltaPnL));

export default router;
