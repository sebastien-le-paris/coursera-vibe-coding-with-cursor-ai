const { initializeDb, insertQuotes } = require('../dist/app/lib/db.js');

const quotes = [
  {
    content: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    content: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    content: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    content: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    content: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    content: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    content: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    content: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    content: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  }
];

async function seedDatabase() {
  try {
    console.log('Initializing database...');
    const db = await initializeDb();

    console.log('Inserting quotes...');
    await insertQuotes(quotes);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();