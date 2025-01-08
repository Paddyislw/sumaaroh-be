import express from 'express';
import * as weddingPreferenceController from '../controllers/WeddingPreferenceController';

const router = express.Router();

router.post('/preferences/:email', weddingPreferenceController.createPreference);
router.get('/preferences/:email', weddingPreferenceController.getPreference);

export default router;