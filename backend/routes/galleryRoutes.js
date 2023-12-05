const express = require('express');
const multer = require('multer');
const router = express.Router();

const {
  createGallery,
  getGallery
} = require('../controllers/galleryController')

const upload = multer({dest:'uploads/'})

router.route('/').get(getGallery);
router.route('/').post(upload.single('imageFile'),createGallery);

module.exports = router;