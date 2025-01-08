import mongoose, { Schema, Document } from 'mongoose';

export interface IWeddingPreference extends Document {
    userId: mongoose.Types.ObjectId;
    guestCount: string;
    venueType: string;
    createdAt: Date;
    updatedAt: Date;
}

const WeddingPreferenceSchema: Schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    guestCount: {
        type: String,
        required: true
    },
    venueType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model<IWeddingPreference>('WeddingPreference', WeddingPreferenceSchema);