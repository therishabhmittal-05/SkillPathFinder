import express from 'express';
import {
  createRecommendation,
  getRecommendations,
  getRecommendationById,
  updateRecommendation,
  deleteRecommendation
} from '../controllers/recommendationController.js';

const router = express.Router();

// Route to create a new recommendation
router.post('/recommendations', createRecommendation);

// Route to get all recommendations
router.get('/recommendations', getRecommendations);

// Route to get a recommendation by ID
router.get('/recommendations/:id', getRecommendationById);

// Route to update a recommendation by ID
router.put('/recommendations/:id', updateRecommendation);

// Route to delete a recommendation by ID
router.delete('/recommendations/:id', deleteRecommendation);

export default router;
