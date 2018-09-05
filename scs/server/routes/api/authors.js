var router = require('express').Router()
const Author = require('../../models/author').Author;

// API for /api/authors (authors collection requests)
router.get('/authors', function(req, res) {
  query = Author.find()
  if (req.query.itemName) {
    query.where('metaData.itemName').equals(req.query.itemName)
  }
  if (req.query.limit) {
    query.limit(req.query.limit)
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    console.log('got select')
    query.select(req.query.select)
  }
  query.exec(function(err, authors) {
      if (err)
          return res.json({
              error: "Error fetching authors",
              error: err
          });
      else if (!authors)
          return res.json({
              error: "Error finding authors",
              error: err
          });
      res.send(authors);
  })
})

router.post('/authors', function(req, res) {
    var author = new Author(req.body)

    author.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added author",
            author: result
        })
    })
})

// Author upsert on the basis of slug in query
router.put('/authors', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Author.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, author) {
        if (err)
            return res.json({
                error: "Error fetching author para upsert",
                message: err
            });
        else if (!author)
            return res.json({
                error: "Error finding author para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted author",
            author: author
        })
    })
})

// CAUTION will delete all authors
router.delete('/authors', function(req, res) {
    Author.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all authors",
                error: err
            });
        res.json({info: 'All authors removed successfully'})
    })
})

// API for /api/author/:_id - specific author with param _id
router.get('/authors/:_id', function(req, res) {
  query = Author.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, author) {
        if (err)
            return res.json({
                error: "Error fetching authors",
                error: err
            });
        else if (!author)
            return res.json({
                error: "Error finding authors",
                error: err
            });
        res.send(author);
    })
})

// API for /api/author/:_id - specific author with param _id
router.get('/authorsbyslug/:slug', function(req, res) {
  query = Author.findOne({"metaData.itemSlug": req.params.slug})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, author) {
        if (err)
            return res.json({
                error: "Error fetching authors",
                error: err
            });
        else if (!author)
            return res.json({
                error: "Error finding authors",
                error: err
            });
        res.send(author);
    })
})

router.delete('/authors/:_id', function(req, res) {
    Author.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting author",
                error: err
            });
        res.json({info: 'author removed successfully'})
    })
})

module.exports = router
