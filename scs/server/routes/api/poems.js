var router = require('express').Router()
const Poem = require('../../models/poem').Poem;

// API for /api/poems (poems collection requests)
router.get('/poems', function(req, res) {
  query = Poem.find()
  //.populate('author', 'metaData')
  .populate({
    path: 'author',
//    select: 'metaData _id authorBio'
//  do not include sensitive personal info; if necessary modularize the select string ?authorselect
    select: '-authorPersonalInfo'
  })
  if (req.query.itemName) {
    query.where('metaData.itemName').equals(req.query.itemName)
  }
  if (req.query.limit) {
    query.limit(parseInt(req.query.limit))
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, poems) {
      if (err)
          return res.json({
              error: "Error fetching poems",
              error: err
          });
      else if (!poems)
          return res.json({
              error: "Error finding poems",
              error: err
          });
      res.send(poems);
  })
})

router.post('/poems', function(req, res) {
    var poem = new Poem(req.body)

    poem.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added poem",
            poem: result
        })
    })
})

// API for /api/poem/regex/:regex - specific poem with regex param (poor man's indexed text search)
router.get('/poems/regex/:regex', function (req, res) {
  // let query = Poem.find({ "metaData.published": true, 'metaData.itemName': new RegExp(req.params.regex, 'i') })
  let query = Poem.find({ "metaData.published": true, 'poemBody.value': new RegExp(req.params.regex, 'i') })
  if (req.query.limit) {
    query.limit(parseInt(req.query.limit))
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  // optionally support field specifications in query strings
  query.exec(function (err, poems) {
    if (err)
      return res.json({
        error: "Error fetching poems por regex",
        error: err
      });
    else if (!poems)
      return res.json({
        error: "Error finding poems por regex",
        error: err
      });
    res.send(poems);
  })
})

// Poem upsert on the basis of slug in query
router.put('/poems', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Poem.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, poem) {
        console.log("err", err)
        if (err)
            return res.json({
                error: "Error fetching poem para upsert",
                message: err
            });
        else if (!poem)
            return res.json({
                error: "Error finding poem para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted poem",
            poem: poem
        })
    })
})

// CAUTION will delete all poems
router.delete('/poems', function(req, res) {
    Poem.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all poems",
                error: err
            });
        res.json({info: 'All poems removed successfully'})
    })
})

// API for /api/poem/slug/:slug - specific poem with param _id
router.get('/poems/slug/:slug', function(req, res) {
  query = Poem.findOne({"metaData.itemSlug": req.params.slug})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, poem) {
        if (err)
            return res.json({
                error: "Error fetching poems",
                error: err
            });
        else if (!poem)
            return res.json({
                error: "Error finding poems",
                error: err
            });
        res.send(poem);
    })
})

// API for /api/poem/:_id - specific poem with param _id
router.get('/poems/:_id', function(req, res) {
  query = Poem.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, poem) {
        if (err)
            return res.json({
                error: "Error fetching poems",
                error: err
            });
        else if (!poem)
            return res.json({
                error: "Error finding poems",
                error: err
            });
        res.send(poem);
    })
})

router.delete('/poems/:_id', function(req, res) {
    Poem.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting poem",
                error: err
            });
        res.json({info: 'poem removed successfully'})
    })
})


module.exports = router
