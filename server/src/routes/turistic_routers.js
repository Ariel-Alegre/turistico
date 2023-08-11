const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer();
const { authenticate } = require('../helpers/middleware');
const { PostTuristic } = require('../controllers/User/PostTuristic')
const { AllTuristic } = require('../controllers/User/AllPost')
const { DetailsTuristic } = require('../controllers/User/DetailsTuristic')



router.post('/post', authenticate, upload.array('imagenes', 30), PostTuristic);
router.get('/turistic', AllTuristic)

router.get('/turistic/:idTuristic', DetailsTuristic)




module.exports = router