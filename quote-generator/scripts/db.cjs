const path = require('path');
const dbPath = path.resolve(__dirname, '../dist/app/lib/db.js');
const { initializeDb, insertQuotes } = require(dbPath);

module.exports = {
  initializeDb,
  insertQuotes
};