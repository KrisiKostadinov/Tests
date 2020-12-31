const router = require('express').Router();
const { homeController } = require('../controllers');

router.get('/', homeController.get.home);

module.exports = router;