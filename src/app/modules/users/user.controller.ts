import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { userService } from './user.service';

const insertUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userService.insertUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const userController = {
  insertUser
};
