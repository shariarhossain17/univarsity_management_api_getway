import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { academicFacultyService } from "./academic.faculty.service";

const insertFaculty=async(req:Request,res:Response,next:NextFunction)=>{


    try {
        const result = await academicFacultyService.insertFaculty(req);

        sendResponse(res,result);
    } catch (error) {
        next(error)
    }

}


export const  academicFacultyController ={
    insertFaculty
}