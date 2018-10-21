var router = require('express').Router()
const Book = require('../../models/book').Book;

// API for /api/books (books collection requests)
router.get('/books', function(req, res) {
  query = Book.find()
  // populate, but do not include sensitive personal info
  // if necessary modularize the select string ?authorselect
  .populate({
    path: 'author',
    select: '-authorPersonalInfo'
  })
  .populate('publisher')
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
  query.exec(function(err, books) {
      if (err)
          return res.json({
              error: "Error fetching books",
              error: err
          });
      else if (!books)
          return res.json({
              error: "Error finding books",
              error: err
          });
      res.send(books);
  })
})

router.post('/books', function(req, res) {
    var book = new Book(req.body)

    book.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added book",
            book: result
        })
    })
})

// Book upsert on the basis of slug in query
router.put('/books', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Book.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, book) {
        if (err)
            return res.json({
                error: "Error fetching book para upsert",
                message: err
            });
        else if (!book)
            return res.json({
                error: "Error finding book para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted book",
            book: book
        })
    })
})

// CAUTION will delete all books
router.delete('/books', function(req, res) {
    Book.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all books",
                error: err
            });
        res.json({info: 'All books removed successfully'})
    })
})

// API for /api/book/:_id - specific book with param _id
router.get('/books/:_id', function(req, res) {
  query = Book.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, book) {
        if (err)
            return res.json({
                error: "Error fetching books",
                error: err
            });
        else if (!book)
            return res.json({
                error: "Error finding books",
                error: err
            });
        res.send(book);
    })
})

// API for /api/book/:_slug - specific book with param slug
router.get('/books/slug/:slug', function(req, res) {
  query = Book.findOne({"metaData.itemSlug": req.params.slug})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, book) {
        if (err)
            return res.json({
                error: "Error fetching books",
                error: err
            });
        else if (!book)
            return res.json({
                error: "Error finding books",
                error: err
            });
        res.send(book);
    })
})

router.delete('/books/:_id', function(req, res) {
    Book.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting book",
                error: err
            });
        res.json({info: 'book removed successfully'})
    })
})

module.exports = router
