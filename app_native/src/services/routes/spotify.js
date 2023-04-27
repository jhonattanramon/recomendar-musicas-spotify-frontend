const router =  require('express').Router();

const spotifyController = require("../controllers/spotifyApiController")

router.route('/token').get( ( req, res) => spotifyController.token( req, res) )


module.exports = router;