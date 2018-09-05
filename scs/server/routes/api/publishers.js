var router = require('express').Router()
const Publisher = require('../../models/publisher').Publisher;

// API for /api/publishers (publishers collection requests)
router.get('/publishers', function(req, res) {
  query = Publisher.find()
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
  query.exec(function(err, publishers) {
      if (err)
          return res.json({
              error: "Error fetching publishers",
              error: err
          });
      else if (!publishers)
          return res.json({
              error: "Error finding publishers",
              error: err
          });
      res.send(publishers);
  })
})

router.post('/publishers', function(req, res) {
    var publisher = new Publisher(req.body)

    publisher.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added publisher",
            publisher: result
        })
    })
})

// Publisher upsert on the basis of slug in query
router.put('/publishers', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Publisher.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, publisher) {
        if (err)
            return res.json({
                error: "Error fetching publisher para upsert",
                message: err
            });
        else if (!publisher)
            return res.json({
                error: "Error finding publisher para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted publisher",
            publisher: publisher
        })
    })
})

// CAUTION will delete all publishers
router.delete('/publishers', function(req, res) {
    Publisher.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all publishers",
                error: err
            });
        res.json({info: 'All publishers removed successfully'})
    })
})

// API for /api/publisher/:_id - specific publisher with param _id
router.get('/publishers/:_id', function(req, res) {
  query = Publisher.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, publisher) {
        if (err)
            return res.json({
                error: "Error fetching publishers",
                error: err
            });
        else if (!publisher)
            return res.json({
                error: "Error finding publishers",
                error: err
            });
        res.send(publisher);
    })
})

// API for /api/publisher/:_id - specific publisher with param _id
router.get('/publishersbyslug/:slug', function(req, res) {
  query = Publisher.findOne({"metaData.itemSlug": req.params.slug})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, publisher) {
        if (err)
            return res.json({
                error: "Error fetching publishers",
                error: err
            });
        else if (!publisher)
            return res.json({
                error: "Error finding publishers",
                error: err
            });
        res.send(publisher);
    })
})

router.delete('/publishers/:_id', function(req, res) {
    Publisher.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting publisher",
                error: err
            });
        res.json({info: 'publisher removed successfully'})
    })
})

module.exports = router
