const router =  require('express').Router();

const spotifyController = require("../controllers/spotifyApiController")

router.route('/token').get( ( req, res) => spotifyController.token( req, res) )
router.route('/user').get( ( req, res) => spotifyController.user( req, res) )

module.exports = router;