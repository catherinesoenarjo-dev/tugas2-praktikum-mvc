const express = require('express');
const router = express.Router();
// Import controller yang baru saja dibuat
const pageController = require('../controllers/page.controller.js');
// Petakan HTTP Method & URL Path ke Fungsi Controller
router.get('/', pageController.getHome);
router.get('/katalog', pageController.getKatalog);
router.get('/tentang', pageController.getAbout);
router.get('/form', pageController.getForm);
router.post('/form/tambah', pageController.postTambahKoleksi);
module.exports = router;
