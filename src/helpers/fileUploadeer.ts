import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import config from '../config';

import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from './file';

console.log(config.cloud.cloud_api_key);
cloudinary.config({
  cloud_name: 'dyj8z11v9',
  api_key: '894961738592132',
  api_secret: config.cloud.cloud_api_secret
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file?.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) reject(error);
      else resolve(result);
    });
  });
};

export const FileUploaderHelper = { uploadToCloudinary, upload };
