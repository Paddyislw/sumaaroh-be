import { Request, Response } from 'express';
import * as WeddingPreferenceService from '../services/WeddingPreferenceService';
import * as UserService from '../services/UserService';
import mongoose from 'mongoose';

export const createPreference = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserByEmail(req.params.email);
        if (!user) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }

        if (!mongoose.Types.ObjectId.isValid(user._id)) {
            res.status(400).json({
                success: false,
                error: 'Invalid user ID'
            });
            return;
        }

        const preference = await WeddingPreferenceService.createPreference(
            user._id.toString(),
            req.body
        );

        res.status(201).json({
            success: true,
            data: preference
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

export const getPreference = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserByEmail(req.params.email);
        if (!user) {
            res.status(404).json({
                success: false,
                error: 'User not found'
            });
            return;
        }

        if (!mongoose.Types.ObjectId.isValid(user._id)) {
            res.status(400).json({
                success: false,
                error: 'Invalid user ID'
            });
            return;
        }

        const preference = await WeddingPreferenceService.getPreferenceByUserId(
            user._id.toString()
        );
        
        if (!preference) {
            res.status(404).json({
                success: false,
                error: 'Wedding preference not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: preference
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};