import express from 'express';
import { academicFacultyController } from './academic.faculty.controller';


const router = express.Router();


router.post("/create",academicFacultyController.insertFaculty)

export const academicFaculty= router;
