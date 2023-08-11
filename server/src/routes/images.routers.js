const { Router } = require('express');
const router = Router();

const { FilesCreate, FilesDetail  } = require('../controllers/User/PostImages')


router.post('/upload', FilesCreate);
router.get('/files/:id', FilesDetail);





module.exports = router



