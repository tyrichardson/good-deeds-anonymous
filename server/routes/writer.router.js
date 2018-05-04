const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 GET Route for authenticated users access to populate Archive view
 Also used for Admin to check on stories marked inappropriate
 **/
router.get('/', (req, res) => {
console.log('authenticated user GET server route for Archive view:', req.isAuthenticated());
console.log('user is:', req.user);
if(req.isAuthenticated()){
let queryText = 'SELECT "story" FROM "story" JOIN "favorite" ON "story"."id" = "favorite"."story_id" JOIN "writer" ON "writer"."id" = "favorite"."writer_id" WHERE "favorite"."writer_id" = $1 ORDER BY "story"."id" DESC;';
pool.query(queryText, [req.user.id])
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
 POST for authenticated users WriterPage--stories published by Writers
 **/
router.post('/', (req, res) => {
  console.log('authenticated user POST server route for WriterPage', req.body);
  if(req.isAuthenticated()) {
    const queryText = 'INSERT INTO "story" (story, writer_id) VALUES ($1, $2);';
    pool.query(queryText, [req.body.newStory, req.user.id])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('post got to the catch in backend router:', error)
      res.sendStatus(500);
    })
    } else {
      res.send(403);
  }
});

/**
DELETE for authenticated users to delete a story that they published
**/
router.delete('/:id', (req, res) => {
  console.log('authenticated user DELETE server route for Archive Page, req.params is:', req.params);
  if(req.isAuthenticated()) {
    let queryText = 'DELETE FROM "story" WHERE id = $1 AND writer_id = $2;';
    pool.query(queryText, [req.params.id, req.body.writer_id])
    .then((result) => {
      console.log('DELETE successful', result);
        res.sendStatus(200);
    }).catch((error) => {
      console.log('error in DELETE, server side', error);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});

/**
 UPDATE for authenticated users to edit a story they published
 **/
router.put('/:id', (req, res) => {
  console.log('authenticated user UPDATE server route for Archive Page');
  if(req.isAuthenticated()) {
    let queryText = 'UPDATE story SET story = $1 WHERE id = $2 AND writer_id = $3;';
    pool.query(queryText, [req.body.story, req.params.id, req.body.writer_id])
    .then((result) => {
      console.log('UPDATE successful', result);
        res.sendStatus(201);
    }).catch((error) => {
      console.log('error in PUT, server side', error);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});



module.exports = router;