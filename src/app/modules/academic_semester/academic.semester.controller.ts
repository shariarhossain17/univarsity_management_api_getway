import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicSemesterService } from './academic.semester.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.getFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.getSIngleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = {
  insertIntoDB,
  getFromDB,
  getSingleFromDB
};
