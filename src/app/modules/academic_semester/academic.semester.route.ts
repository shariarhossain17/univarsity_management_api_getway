import express from 'express';
import { academicSemesterController } from './academic.semester.controller';

const router = express.Router();

router.post('/', academicSemesterController.insertIntoDB);
router.get('/', academicSemesterController.getFromDB);
router.get('/:id', academicSemesterController.getSingleFromDB);
router.patch('/:id', academicSemesterController.updateAcademicSemester);
router.delete('/:id', academicSemesterController.deleteAcademicSemester);

export const academicSemesterRouter = router;
