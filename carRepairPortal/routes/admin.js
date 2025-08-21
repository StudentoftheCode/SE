const express = require('express')
const router = express.Router()
const adminAuthController = require('../controllers/admin/authController') 
const adminDashController = require('../controllers/admin/repairController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, adminAuthController.getIndex)
router.get('/dashboard', ensureAuth, adminDashController.getIndex)

module.exports = router