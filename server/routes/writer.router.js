const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Routes for authenticated users access
 * GET
 */
router.get('/', (req, res) => {
console.log('authenticated user GET server route for ReadPageWriter');
if(req.isAuthenticated()){
let queryText = 'SELECT * from "story" ORDER BY id DESC;';
pool.query(queryText)
.then((result)=> {
  res.send(result.rows);
  console.log('writerRouter result.rows', result.rows);
})
.catch((error) => {
  res.sendStatus(500);
}); 
}
});

/**
 * POST 
 */
router.post('/', (req, res) => {
  console.log('authenticated user POST server route for WriterPage');
  if(req.isAuthenticated()){
    const queryText = 
  }
});

module.exports = router;