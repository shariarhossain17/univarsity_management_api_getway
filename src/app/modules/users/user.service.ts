import { Request } from 'express';
import { ICloudinaryResponse, IUploadFile } from '../../../helpers/file';
import { FileUploaderHelper } from '../../../helpers/fileUploadeer';
import { AuthServiceUrl } from '../../../shared/axios';

const insertUser = async (req: Request) => {
  const file = req.file as IUploadFile;

  const uploadImage: ICloudinaryResponse = await FileUploaderHelper.uploadToCloudinary(file);

  if (uploadImage) {
    req.body.profileImage = uploadImage.secure_url;
  }

  const { academicDepartment, academicSemester, academicFaculty } = req.body.student;

  //academic department
  const academicDepartmentResponse = await AuthServiceUrl.get(
    `/academic-department?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.result && Array.isArray(academicDepartmentResponse?.result)) {
    req.body.student.academicDepartment = academicDepartmentResponse.result[0].id;
  }

  //academic semester
  const academicSemesterResponse = await AuthServiceUrl.get(
    `/academic-semester?syncId=${academicSemester}`
  );
  if (academicSemesterResponse?.result && Array.isArray(academicSemesterResponse?.result)) {
    req.body.student.academicSemester = academicSemesterResponse.result[0].id;
  }

  //academic faculty
  const academicFacultyResponse = await AuthServiceUrl.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse?.result && Array.isArray(academicFacultyResponse?.result)) {
    req.body.student.academicFaculty = academicFacultyResponse.result[0].id;
  }
};

export const userService = {
  insertUser
};
