var router = require('express').Router()

router.use(require('./articles'))
router.use(require('./authors'))
router.use(require('./books'))
router.use(require('./case-studies'))
router.use(require('./events'))
router.use(require('./publishers'))
router.use(require('./users'))
router.use(require('./videos'))

module.exports = router
