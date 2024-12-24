import { Request, Response } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreServiceUrl, CoreServiceUrl as HttpService } from '../../../shared/axios';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response): Promise<void> => {
  const response: IGenericResponse = await CoreServiceUrl.post('/academic-department', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  sendResponse(res, response);
};

const getFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-department', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSIngleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/academic-department/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const updateFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.patch(
    `/academic-department/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const deleteFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.delete(
    `/academic-department/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const academicDepartMent = {
  insertIntoDB,
  getFromDB,
  getSIngleFromDB,
  updateFromDb,
  deleteFromDb
};
