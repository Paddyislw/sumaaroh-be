import { Request, Response } from 'express';
import * as UserService from '../services/UserService';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserByEmail(req.params.email);
        if (!user) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};