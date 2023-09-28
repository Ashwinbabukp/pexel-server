const express = require('express')
const router = new express.Router()
const userController = require("../controllers/userController")
const imageController = require("../controllers/imageController")

router.post("/register", userController.register)

router.post("/login", userController.login)

router.post("/get-user", userController.getUser)

router.put('/edit-user', userController.editUser)

router.post('/add-image', imageController.addImage)

router.post('/get-user-images', imageController.getUserImages)

router.get('/get-all-images',imageController.getAllImages)

module.exports = router
