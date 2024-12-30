import express from 'express';
import { academicDepartMentRouter } from '../modules/academic_department/academic.department.route';
import { academicSemesterRouter } from '../modules/academic_semester/academic.semester.route';
import { academicFaculty } from '../modules/acadmic_faculty/academic.faculty.route';
import { userRouter } from '../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: userRouter
  },
  {
    path: '/academic-semester',
    routes: academicSemesterRouter
  },
  {
    path: '/academic-department',
    routes: academicDepartMentRouter
  },
  {
    path: '/academic-faculty',
    routes: academicFaculty
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
