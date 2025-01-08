import User, { IUser } from '../models/User';

export const createUser = async (userData: { 
    name: string; 
    email: string; 
}): Promise<IUser> => {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
        return await User.findOne({ email }).exec();
    } catch (error) {
        throw error;
    }
};