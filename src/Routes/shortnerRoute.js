const express = require('express')
const {getUrl,createUrl,test} = require('../Controllers/shortnerController.js')

const router = express.Router();

router.post('/url', createUrl)
router.get('/test',test)
router.get('/:shortUrl',getUrl)


module.exports = router
