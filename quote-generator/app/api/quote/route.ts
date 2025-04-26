import { NextResponse } from 'next/server';
import { getRandomQuote } from '../../lib/db';

export async function GET() {
  try {
    console.log('Fetching quote from local database...');
    const quote = await getRandomQuote();

    if (!quote) {
      throw new Error('No quotes found in database');
    }

    console.log('Successfully fetched quote:', quote);
    return NextResponse.json(quote);
  } catch (error: any) {
    console.error('Error fetching quote from database:', {
      message: error?.message || 'Unknown error',
      name: error?.name || 'Unknown error type',
      stack: error?.stack || 'No stack trace available'
    });

    return NextResponse.json(
      { error: `Failed to fetch quote: ${error?.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}