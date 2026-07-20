import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  feedback: {
    type: String,
    required: [true, 'Feedback is required'],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);