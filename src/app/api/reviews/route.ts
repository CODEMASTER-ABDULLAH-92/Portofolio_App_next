import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage (replace with database in production)
let reviews: Array<{
  id: string;
  name: string;
  email: string;
  feedback: string;
  rating: number;
  createdAt: string;
}> = [];

// Initial dummy reviews with correct emails
const initialReviews = [
  {
    id: uuidv4(),
    name: "Sarah Ahmed",
    email: "sarah.ahmed@techstudio.com",
    feedback: "Abdullah is an exceptional developer! He delivered our project ahead of schedule and exceeded all expectations. His attention to detail and problem-solving skills are top-notch.",
    rating: 5,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    name: "Muhammad Usman",
    email: "usman.m@digitalwave.io",
    feedback: "Working with Abdullah was a pleasure. He's not only skilled in full-stack development but also great at communicating complex technical concepts clearly. Highly recommended!",
    rating: 5,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    name: "Ayesha Khan",
    email: "ayeshakhan9234@gmail.com",
    feedback: "Abdullah's expertise in Next.js and React is impressive. He helped us build a scalable application with beautiful UI. Will definitely work with him again.",
    rating: 4.5,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    name: "Ali Raza",
    email: "backendeng@gmail.com",
    feedback: "The backend API architecture Abdullah built for us is rock solid. He has deep understanding of Node.js and MongoDB. Great problem solver!",
    rating: 4,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: uuidv4(),
    name: "Fatima Noor",
    email: "fatima.noor@startup.pk",
    feedback: "Abdullah is a true professional. His ability to quickly understand requirements and deliver high-quality code is remarkable. He's a valuable asset to any development team.",
    rating: 5,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Initialize with dummy data if empty
if (reviews.length === 0) {
  reviews = initialReviews;
}

// GET: Fetch all reviews
export async function GET() {
  try {
    // Sort by newest first
    const sortedReviews = [...reviews].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json(sortedReviews);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

// POST: Add a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, feedback, rating } = body;

    // Validate required fields
    if (!name || !email || !feedback || rating === undefined) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create new review
    const newReview = {
      id: uuidv4(),
      name: name.trim(),
      email: email.trim(),
      feedback: feedback.trim(),
      rating: Number(rating),
      createdAt: new Date().toISOString(),
    };

    reviews.push(newReview);

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add review' },
      { status: 500 }
    );
  }
}

// DELETE: Delete a review (optional - for admin purposes)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Review ID is required' },
        { status: 400 }
      );
    }

    const index = reviews.findIndex((review) => review.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    reviews.splice(index, 1);
    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
}