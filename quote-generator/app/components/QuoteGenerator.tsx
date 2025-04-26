'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { getRandomBackground } from '../../lib/backgroundImages';
import { Quote, getRandomQuote } from '../types/quote';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const fetchNewQuote = async () => {
    setLoading(true);
    try {
      const newQuote = await getRandomQuote();
      setQuote(newQuote);
      // Update background image when fetching new quote
      setBackgroundImage(getRandomBackground());
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <Card className="w-full max-w-lg shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-2xl font-serif text-gray-800 text-center">
                "{quote?.content}"
              </p>
              <p className="text-gray-600 text-right italic">
                - {quote?.author}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            onClick={fetchNewQuote}
            disabled={loading}
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            New Quote
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}