var router = require('express').Router()
const Article = require('../../models/article').Article;

// API for /api/articles (articles collection requests)
router.get('/articles', function(req, res) {
  const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : {}
  query = Article.find(querystring)
  .populate('author')
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
    //console.log('adding new article: ' + req.body.title)
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
    // TODO support update as well as upsert
        // update: :_id present, define query and options accordingly
        // upsert: no :_id present, but :idLegacy present, define query and options accordingly
    var article = {}
    article["idLegacy"] = null
    article["metaData"] = {}
    article["articlePais"] = null
    article["articleBody"] = null
    article["articleTeaser"] = null

    article.idLegacy = req.body.idLegacy
    article.metaData = req.body.metaData
    article.articlePais = req.body.articlePais
    article.articleBody = req.body.articleBody
    article.articleTeaser = req.body.articleTeaser

    // console.log("article", article)
    // skip autor for now, since we would have to look that up :(
        // no, now we got it!
    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
    Article.findOneAndUpdate(query, article, {upsert: true, new: true},
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
