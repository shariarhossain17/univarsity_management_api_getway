import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { authController } from './auth.controller';
import authValidation from './auth.validation';

const router = express.Router();

router.post('/login', validateRequest(authValidation.authZodSchema), authController.loginUser);
router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshZodSchema),
  authController.refreshToken
);

router.post(
  '/change-password',
  validateRequest(authValidation.changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  authController.changePassword
);
export const authRouter = router;
