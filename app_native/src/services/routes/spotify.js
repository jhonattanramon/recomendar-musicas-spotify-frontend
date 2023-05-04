const router =  require('express').Router();

const spotifyController = require("../services/controllers/spotifyApiController")

router.route('/token').get( ( req, res) => spotifyController.token( req, res) )
router.route('/user').get( ( req, res) => spotifyController.user( req, res) )
router.route('/auth').get( ( req, res) => spotifyController.auth( req, res))

module.exports = router;