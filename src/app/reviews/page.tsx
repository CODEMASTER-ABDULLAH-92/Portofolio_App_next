"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import AddReviewModal from "../Component/AddReviwModel";
import Footer from "../Component/Footer";
import Link from "next/link";
interface Review {
  id: string;
  name: string;
  email: string;
  feedback: string;
  rating: number;
  createdAt: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
      
      // Calculate average rating
      if (data.length > 0) {
        const avg = data.reduce((acc: number, curr: Review) => acc + curr.rating, 0) / data.length;
        setAverageRating(avg);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddReview = async (reviewData: { name: string; email: string; feedback: string; rating: number }) => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      
      if (response.ok) {
        const newReview = await response.json();
        setReviews([newReview, ...reviews]);
        // Recalculate average
        const allReviews = [newReview, ...reviews];
        const avg = allReviews.reduce((acc, curr) => acc + curr.rating, 0) / allReviews.length;
        setAverageRating(avg);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-600" />);
    }
    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  return (
    <div className="relative min-h-screen bg-[#050810] overflow-hidden">
      {/* Background Effects */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link 
  href="/" 
  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-4"
>
  ← Back to Home
</Link>
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 mb-4">
            <MdRateReview className="text-indigo-400" />
            Client Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            What People Say About{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Abdullah
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 rounded-full" />
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from clients and collaborators about working with Abdullah
          </p>
        </motion.div>

        {/* Stats and Add Review Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10"
        >
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-black text-white">{reviews.length}</p>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                {averageRating > 0 ? averageRating.toFixed(1) : '0'}
              </p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-600'} 
                    size={14}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaPaperPlane className="text-white/80" />
            Write a Review
          </motion.button>
        </motion.div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        ) : reviews.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-xs">{review.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{review.feedback}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-gray-600 text-xs">
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            variants={itemVariants}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No Reviews Yet</h3>
            <p className="text-gray-500">Be the first to share your experience working with Abdullah!</p>
          </motion.div>
        )}
      </motion.div>

      {/* Add Review Modal */}
      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
      <Footer/>
    </div>
  );
}