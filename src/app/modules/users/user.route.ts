import express, { NextFunction, Request, Response } from 'express';
import { FileUploaderHelper } from '../../../helpers/fileUploadeer';
import { userController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  //auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FileUploaderHelper.upload.single('file') as unknown as express.RequestHandler,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return userController.insertUser(req, res, next);
  }
);

export const userRouter = router;
