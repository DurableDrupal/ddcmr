var router = require('express').Router()
const CaseStudy = require('../../models/case-study').CaseStudy;

// API for /api/case-studies (case-studies collection requests)
router.get('/case-studies', function(req, res) {
  query = CaseStudy.find()
  .populate('articles.article')
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
  query.exec(function(err, caseStudies) {
      if (err)
          return res.json({
              error: "Error fetching caseStudies",
              error: err
          });
      else if (!caseStudies)
          return res.json({
              error: "Error finding caseStudies",
              error: err
          });
      res.send(caseStudies);
  })
})

router.post('/case-studies', function(req, res) {
    var caseStudy = new CaseStudy(req.body)

    caseStudy.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added caseStudy",
            caseStudy: result
        })
    })
})

// CaseStudy upsert on the basis of slug in query
router.put('/case-studies', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    CaseStudy.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, caseStudy) {
        if (err)
            return res.json({
                error: "Error fetching caseStudy para upsert",
                message: err
            });
        else if (!caseStudy)
            return res.json({
                error: "Error finding caseStudy para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted caseStudy",
            caseStudy: caseStudy
        })
    })
})

// CAUTION will delete all case-studies
router.delete('/case-studies', function(req, res) {
    CaseStudy.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all case-studies",
                error: err
            });
        res.json({info: 'All case-studies removed successfully'})
    })
})

// API for /api/caseStudy/:_id - specific caseStudy with param _id
router.get('/case-studies/:_id', function(req, res) {
  query = CaseStudy.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, caseStudy) {
        if (err)
            return res.json({
                error: "Error fetching case-studies",
                error: err
            });
        else if (!caseStudy)
            return res.json({
                error: "Error finding case-studies",
                error: err
            });
        res.send(caseStudy);
    })
})

// API for /api/caseStudy/:_id - specific caseStudy with param _id
router.get('/case-studiesbyslug/:slug', function(req, res) {
  query = CaseStudy.findOne({"metaData.itemSlug": req.params.slug})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, caseStudy) {
        if (err)
            return res.json({
                error: "Error fetching case-studies",
                error: err
            });
        else if (!caseStudy)
            return res.json({
                error: "Error finding case-studies",
                error: err
            });
        res.send(caseStudy);
    })
})

router.delete('/case-studies/:_id', function(req, res) {
    CaseStudy.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting caseStudy",
                error: err
            });
        res.json({info: 'caseStudy removed successfully'})
    })
})

module.exports = router
