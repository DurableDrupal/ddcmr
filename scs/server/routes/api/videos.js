var router = require('express').Router()
const Video = require('../../models/video').Video;

// API for /api/videos (videos collection requests)
router.get('/videos', function(req, res) {
  const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : {}
  query = Video.find(querystring)
  if (req.query.limit) {
    query.limit(req.query.limit)
  }
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, videos) {
      if (err)
          return res.json({
              error: "Error fetching videos",
              error: err
          });
      else if (!videos)
          return res.json({
              error: "Error finding videos",
              error: err
          });
      res.send(videos);
  })
})

router.post('/videos', function(req, res) {
    //console.log('adding new video: ' + req.body.title)
    var video = new Video(req.body)

    video.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added video",
            video: result
        })
    })
})

// Video upsert on the basis of idLegacy in query
router.put('/videos', function(req, res) {
    // TODO support update as well as upsert
        // update: :_id present, define query and options accordingly
        // upsert: no :_id present, but :idLegacy present, define query and options accordingly
    var query = {
        'idLegacy': req.body.idLegacy
    }
    Video.findOneAndUpdate(query, req.body, {upsert: true, new: true},
      function(err, video) {
        if (err)
            return res.json({
                error: "Error fetching video para upsert",
                error: err
            });
        else if (!video)
            return res.json({
                error: "Error finding video para upsert",
                error: err
            });
        res.json({
            message: "Successfully upserted video",
            video: video
        })
    })
})

// CAUTION will delete all videos
router.delete('/videos', function(req, res) {
    Video.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all videos",
                error: err
            });
        res.json({info: 'All videos removed successfully'})
    })
})

// API for /api/video/:_id - specific video with param _id
router.get('/videos/:_id', function(req, res) {
  query = Video.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, video) {
        if (err)
            return res.json({
                error: "Error fetching videos",
                error: err
            });
        else if (!video)
            return res.json({
                error: "Error finding videos",
                error: err
            });
        res.send(video);
    })
})

router.delete('/videos/:_id', function(req, res) {
    Video.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting video",
                error: err
            });
        res.json({info: 'video removed successfully'})
    })
})


module.exports = router
