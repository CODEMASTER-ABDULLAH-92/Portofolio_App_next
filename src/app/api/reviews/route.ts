import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../lib/mongodb';
import Review from '../../lib/model';

// GET: Fetch all reviews
export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
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

    await connectDB();
    
    // Create new review
    const newReview = new Review({
      name: name.trim(),
      email: email.trim(),
      feedback: feedback.trim(),
      rating: Number(rating),
    });

    await newReview.save();

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json(
      { error: 'Failed to add review' },
      { status: 500 }
    );
  }
}