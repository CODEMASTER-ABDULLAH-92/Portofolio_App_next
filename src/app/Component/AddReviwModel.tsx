"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaUser, FaEnvelope, FaComment, FaTimes, FaPaperPlane } from "react-icons/fa";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; feedback: string; rating: number }) => void;
}

export default function AddReviewModal({ isOpen, onClose, onSubmit }: AddReviewModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0,
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '', feedback: '', rating: 0 });
      setHoveredRating(0);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', feedback: '', rating: 0 });
    setHoveredRating(0);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="relative bg-[#0d1120] border border-white/10 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
              >
                <FaTimes className="text-lg" />
              </button>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 mb-3">
                    <FaPaperPlane className="text-indigo-400" />
                    Share Your Experience
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Review About{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                      Abdullah
                    </span>
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Your feedback helps others know about working with Abdullah
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <FaUser className="inline mr-2 text-indigo-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors duration-200`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <FaEnvelope className="inline mr-2 text-violet-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.email ? 'border-red-500/50' : 'border-white/10'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors duration-200`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Rating Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => {
                            setFormData({ ...formData, rating: star });
                            if (errors.rating) setErrors({ ...errors, rating: '' });
                          }}
                          className="focus:outline-none transition-transform duration-200 hover:scale-110"
                        >
                          <FaStar
                            className={`text-3xl ${
                              star <= (hoveredRating || formData.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-600'
                            } transition-colors duration-200`}
                          />
                        </button>
                      ))}
                    </div>
                    {errors.rating && (
                      <p className="text-red-400 text-xs mt-1">{errors.rating}</p>
                    )}
                  </div>

                  {/* Feedback Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <FaComment className="inline mr-2 text-pink-400" />
                      Your Feedback
                    </label>
                    <textarea
                      value={formData.feedback}
                      onChange={(e) => {
                        setFormData({ ...formData, feedback: e.target.value });
                        if (errors.feedback) setErrors({ ...errors, feedback: '' });
                      }}
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border ${
                        errors.feedback ? 'border-red-500/50' : 'border-white/10'
                      } text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition-colors duration-200 resize-none`}
                      placeholder="Share your experience working with Abdullah..."
                    />
                    {errors.feedback && (
                      <p className="text-red-400 text-xs mt-1">{errors.feedback}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-white/80" />
                        Submit Review
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}