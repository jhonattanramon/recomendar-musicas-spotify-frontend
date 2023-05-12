const router =  require('express').Router();

const spotifyController = require("../controllers/spotifyApiController")

router.route('/token').get( ( req, res) => spotifyController.token( req, res) )
router.route('/user').get( ( req, res) => spotifyController.user( req, res) )
router.route('/auth').get( ( req, res) => spotifyController.auth( req, res))
router.route('/getAllApi').get((req, res) => spotifyController.getAllApi( req, res))
router.route('/playlist').get((req,res) => spotifyController.playlist( req, res))
router.route('/artistasDoUsuario').get( ( req, res) => spotifyController.artistasDoUsuario( req, res))
router.route('/obterVariosArtistas').get( ( req, res) => spotifyController.obterVariosArtistas( req , res) )
router.route('/obterGeneros').get( ( req, res) => spotifyController.obterGeneros(req, res))
module.exports = router;