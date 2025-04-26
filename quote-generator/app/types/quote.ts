export interface Quote {
  content: string;
  author: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRandomQuote = async (retries = 3): Promise<Quote> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch('/api/quote', {
        // Add cache control
        cache: 'no-store',
        // Add headers
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch quote');
      }

      const data = await response.json();
      return {
        content: data.content,
        author: data.author
      };
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error);
      if (attempt === retries - 1) {
        throw error;
      }
      // Wait before retrying (exponential backoff)
      await delay(Math.min(1000 * Math.pow(2, attempt), 5000));
    }
  }

  throw new Error('Failed to fetch quote after all retries');
};