import { AppData } from "@src/interfaces";
import { AppService } from "@src/services";
import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function AppController(req: Request, res: Response, next: NextFunction) {
    const data: AppData = req.body
    try {
        const response = await AppService(data)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            code: 'INTERNAL_SERVER_ERROR'
        })
    }
}