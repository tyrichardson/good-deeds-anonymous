const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET for Landing/Read page, unauthenticated users access
 * story.id = 1 is the first story, the Landing page display
 */
router.get('/', (req, res) => {
// console.log('unauthenticated user GET route for Landing page');
let queryText = 'SELECT "story"."id", "story", "writer_id", "username", "state_usa", "inappropriate" FROM "story" JOIN "writer" ON "writer"."id" = "story"."writer_id" ORDER BY "story"."id" ASC;';
pool.query(queryText)
.then((result)=> {
  res.send(result.rows);
  // console.log('readerRouter result.rows', result.rows);
})
.catch((error) => {
  res.sendStatus(500);
}); 
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;