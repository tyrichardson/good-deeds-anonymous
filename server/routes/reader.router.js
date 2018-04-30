const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET for Landing/Read page, unauthenticated users access
 */
router.get('/', (req, res) => {
console.log('unauthenticated user GET route for Landing page');
let queryText = 'SELECT * from "story";';
pool.query(queryText)
.then((result)=> {
  res.send(result.rows);
  console.log('readerRouter result.rows', result.rows);
})
.catch((error) => {
  res.sendStatus(500);
}); 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;