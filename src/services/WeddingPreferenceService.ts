import WeddingPreference, { IWeddingPreference } from '../models/WeddingPreference';
import mongoose from 'mongoose';

export const createPreference = async (
    userId: string,
    preferenceData: {
        guestCount: string;
        venueType: string;
    }
): Promise<IWeddingPreference> => {
    try {
        const preference = new WeddingPreference({
            userId: new mongoose.Types.ObjectId(userId),
            ...preferenceData
        });
        return await preference.save();
    } catch (error) {
        throw error;
    }
};

export const getPreferenceByUserId = async (
    userId: string
): Promise<IWeddingPreference | null> => {
    try {
        return await WeddingPreference.findOne({ 
            userId: new mongoose.Types.ObjectId(userId) 
        }).exec();
    } catch (error) {
        throw error;
    }
};