var router = require('express').Router()
const Event = require('../../models/event').Event;

// API for /api/events (events collection requests)
router.get('/events', function(req, res) {
  // const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : {"metaData.published": true}
  const querystring = (req.query.idLegacy) ? {idLegacy: req.query.idLegacy} : null
  query = Event.find(querystring)
//  .populate('whatever')
  if (req.query.sort) {
    query.sort(req.query.sort)
  }
  if (req.query.select) {
    query.select(req.query.select)
  }
  if (req.query.limit) {
    query.limit(parseInt((req.query.limit)))
  }
  query.exec(function(err, eventosGlobales) {
      if (err)
          return res.json({
              error: "Error fetching eventosGlobales",
              error: err
          });
      else if (!eventosGlobales)
          return res.json({
              error: "Error finding eventosGlobales",
              error: err
          });
      res.send(eventosGlobales);
  })
})

router.post('/events', function(req, res) {
    //console.log('adding new event: ' + req.body.title)
    var event = new Event(req.body)

    event.save(function(err, result) {
        if (err)
            return res.json({
                error: err
            });
        res.json({
            message: "Successfully added event",
            event: result
        })
    })
})

// Event upsert on the basis of slug in query
router.put('/events', function(req, res) {
    // TODO support update as well as upsert
        // update: :_id present, define query and options accordingly
        // upsert: no :_id present, but :idLegacy present, define query and options accordingly
    var aEvent = {}
    aEvent["idLegacy"] = null
    aEvent["metaData"] = {}
    aEvent["eventOrganizer"] = null
    aEvent["eventSpeaker"] = null
    aEvent["eventInfo"] = {}
    aEvent["eventDescription"] = null
    aEvent["eventSummary"] = null
    aEvent["eventTags"] = []
    aEvent["eventEmailContact"] = null
    aEvent["eventTwitter"] = {}

    aEvent.idLegacy = req.body.idLegacy
    aEvent.metaData = req.body.metaData
    aEvent.eventOrganizer = req.body.eventOrganizer 
    aEvent.eventSpeaker = req.body.eventSpeaker 
    aEvent.eventInfo = req.body.eventInfo 
    aEvent.eventDescription = req.body.eventDescription 
    aEvent.eventSummary = req.body.eventSummary 
    aEvent.eventTags = req.body.eventTags 
    aEvent.eventEmailContact = req.body.eventEmailContact 
    aEvent.eventTwitter = req.body.eventTwitter 
//    console.log("req.body", req.body)
//    console.log("aEvent", aEvent)

    var query = {
        'metaData.itemSlug': req.body.metaData.itemSlug
    }
/*
    console.log('query', query)
    if (aEvent.idLegacy === "55508") {
        console.log("55508", aEvent.eventInfo.eventImage)
        console.log("55508", req.body.eventInfo)
    }
*/
    Event.findOneAndUpdate(query, aEvent, {upsert: true, new: true},
      function(err, event) {
        //console.log("event", event)
        console.log("err", err)
        if (err)
            return res.json({
                error: "Error fetching event para upsert",
                message: err
            });
        else if (!event)
            return res.json({
                error: "Error finding event para upsert",
                message: err
            });
        res.json({
            message: "Successfully upserted event",
            event: event
        })
    })
})

// CAUTION will delete all events
router.delete('/events', function(req, res) {
    Event.remove({}, function(err) {
        if (err)
            return res.json({
                error: "Error deleting all eventosGlobales",
                error: err
            });
        res.json({info: 'All eventosGlobales removed successfully'})
    })
})

// API for /api/events/:regex - specific events with regex param (poor man's indexed text search)
router.get('/events/regex/:regex', function (req, res) {
  // do not use, events aren't published :(
  // let query = Event.find({ "metaData.published": true, 'metaData.itemName': new RegExp(req.params.regex, 'i') })
  let query = Event.find({ 'metaData.itemName': new RegExp(req.params.regex, 'i') })
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
  query.exec(function (err, eventos) {
    if (err)
      return res.json({
        error: "Error fetching events por regex",
        error: err
      });
    else if (!eventos)
      return res.json({
        error: "Error finding events por regex",
        error: err
      });
    res.send(eventos);
  })
})

// API for /api/event/:slug - specific event with param slug
router.get('/events/slug/:slug', function (req, res) {
    query = Event.findOne({ 'metaData.itemSlug': req.params.slug })
    // optionally support field specifications in query strings
    query.exec(function (err, event) {
      if (err)
        return res.json({
          error: "Error fetching event por slug",
          error: err
        });
      else if (!event)
        return res.json({
          error: "Error finding event por slug",
          error: err
        });
      res.send(event);
    })
  })

// API for /api/events/:_id - specific beventwith param _id
router.get('/events/:_id', function(req, res) {
  query = Event.findOne({_id: req.params._id})
  // optionally support field specifications in query strings
  if (req.query.select) {
    query.select(req.query.select)
  }
  query.exec(function(err, event) {
        if (err)
            return res.json({
                error: "Error fetching eventosGlobales",
                error: err
            });
        else if (!event)
            return res.json({
                error: "Error finding eventosGlobales",
                error: err
            });
        res.send(event);
    })
})

router.delete('/events/:_id', function(req, res) {
    Event.findByIdAndRemove({
        _id: req.params._id
    }, function(err) {
        if (err)
            return res.json({
                error: "Error deleting event",
                error: err
            });
        res.json({info: 'event removed successfully'})
    })
})


module.exports = router
