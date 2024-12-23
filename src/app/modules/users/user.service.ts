import { Request } from 'express';
import { ICloudinaryResponse, IUploadFile } from '../../../helpers/file';
import { FileUploaderHelper } from '../../../helpers/fileUploadeer';

const insertUser = async (req: Request) => {
  const file = req.file as IUploadFile;

  const uploadImage: ICloudinaryResponse = await FileUploaderHelper.uploadToCloudinary(file);
  console.log(uploadImage, 'from fafa');
};

export const userService = {
  insertUser
};
