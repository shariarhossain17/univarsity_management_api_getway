import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicDepartMent } from './academic.department.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartMent.insertIntoDB(req, res);
  } catch (error) {
    next(error);
  }
};

const getFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartMent.getFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartMent.getSIngleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartMent.updateFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicDepartMent.deleteFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = {
  insertIntoDB,
  getFromDB,
  getSingleFromDB,
  deleteFromDb,
  updateFromDb
};
