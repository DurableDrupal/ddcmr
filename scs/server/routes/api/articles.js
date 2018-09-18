var router = require('express').Router()
const Article = require('../../models/article').Article;

// API for /api/articles (articles collection requests)
router.get('/articles', function(req, res) {
  query = Article.find()
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
  query.exec(function(err, articles) {
      if (err)
          return res.json({
              error: "Error fetching articles",
              error: err
          });
      else if (!articles)
          return res.json({
              error: "Error finding articles",
              error: err
          });
      res.send(articles);
  })
})

router.post('/articles', function(req, res) {
    var article = new Article(req.body)

    article.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added article",
            article: result
        })
    })
})

// Article upsert on the basis of slug in query
router.put('/articles', function(req, res) {
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Article.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, article) {
        console.log("err", err)
        if (err)
            return res.json({
                error: "Error fetching article para upsert",
                message: err
            });
        else if (!article)
            return res.json({
                error: "Error finding article para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted article",
            article: article
        })
    })
})

// CAUTION will delete all articles
router.delete('/articles', function(req, res) {
    Article.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all articles",
                error: err
            });
        res.json({info: 'All articles removed successfully'})
    })
})

// API for /api/article/regex/:regex - specific article with regex param (poor man's indexed text search)
router.get('/articles/regex/:regex', function (req, res) {
  // let query = Article.find({ "metaData.published": true, 'metaData.itemName': new RegExp(req.params.regex, 'i') })
  let query = Article.find({ "metaData.published": true, 'articleBody.value': new RegExp(req.params.regex, 'i') })
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
  query.exec(function (err, articles) {
    if (err)
      return res.json({
        error: "Error fetching articles por regex",
        error: err
      });
    else if (!articles)
      return res.json({
        error: "Error finding articles por regex",
        error: err
      });
    res.send(articles);
  })
})

// API for /api/article/slug/:slug - specific article with param _id
router.get('/articles/slug/:slug', function(req, res) {
  query = Article.findOne({"metaData.itemSlug": req.params.slug})
  .populate({
    path: 'author',
    select: '-authorPersonalInfo'
  })
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, article) {
        if (err)
            return res.json({
                error: "Error fetching articles",
                error: err
            });
        else if (!article)
            return res.json({
                error: "Error finding articles",
                error: err
            });
        res.send(article);
    })
})

// API for /api/article/tag/:tag - specific article with param tag slug - TODO add optional query filter if tags are non-unique 
router.get('/articles/tag/:tag', function(req, res) {
  query = Article.find({"tags.tagSlug": req.params.tag})
  //.populate('author', 'metaData')
  .populate({
    path: 'author',
//    select: 'metaData _id authorBio'
//  do not include sensitive personal info; if necessary modularize the select string ?authorselect
    select: '-authorPersonalInfo'
  })
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, article) {
        if (err)
            return res.json({
                error: "Error fetching articles",
                error: err
            });
        else if (!article)
            return res.json({
                error: "Error finding articles",
                error: err
            });
        res.send(article);
    })
})

// API for /api/article/:_id - specific article with param _id
router.get('/articles/:_id', function(req, res) {
  query = Article.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, article) {
        if (err)
            return res.json({
                error: "Error fetching articles",
                error: err
            });
        else if (!article)
            return res.json({
                error: "Error finding articles",
                error: err
            });
        res.send(article);
    })
})

router.delete('/articles/:_id', function(req, res) {
    Article.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting article",
                error: err
            });
        res.json({info: 'article removed successfully'})
    })
})

module.exports = router

