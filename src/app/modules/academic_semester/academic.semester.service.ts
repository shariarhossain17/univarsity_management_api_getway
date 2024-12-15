import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreServiceUrl as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSIngleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(`/academic-semester/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const academicSemesterService = {
  insertIntoDB,
  getFromDB,
  getSIngleFromDB
};
