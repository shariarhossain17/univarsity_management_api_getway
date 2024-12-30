import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import { authService } from './auth.service';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.loginUser(req);

    const { refreshToken, ...others } = result.result;

    console.log(refreshToken, others);

    const cookieOptions = {
      secure: config.env == 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.result.refreshToken, cookieOptions);

    res.send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'user logged in ',
      result: others
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.refreshToken(req);

    const { refreshToken, ...others } = result.result;

    const cookieOptions = {
      secure: config.env == 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result.result.refreshToken, cookieOptions);

    res.send({
      statusCode: httpStatus.OK,
      success: true,
      message: 'new refresh token generated ',
      result: others
    });
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.changePassword(req);

    console.log(result);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const authController = {
  loginUser,
  refreshToken,
  changePassword
};
