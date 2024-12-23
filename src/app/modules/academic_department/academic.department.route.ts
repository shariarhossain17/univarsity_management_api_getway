import express from 'express';
import { academicDepartMent } from './academic.department.service';

const router = express.Router();

router.post('/', academicDepartMent.insertIntoDB);
router.get('/', academicDepartMent.getFromDB);
router.get('/:id', academicDepartMent.getSIngleFromDB);
router.patch('/:id', academicDepartMent.updateFromDb);
router.delete('/:id', academicDepartMent.deleteFromDb);

export const academicDepartMentRouter = router;
