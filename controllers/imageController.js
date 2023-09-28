const images = require("../model/imageSchema")

exports.addImage = async (req, res) => {
    const { email, url, iname } = req.body
    try {
        const existingImage = await images.findOne({ url })
        if (existingImage) {
            res.status(403).json("Image already exists")
        }
        else {
            const newImage = new images({
                email, url, iname
            })
            await newImage.save()
            res.status(200).json("Image added successfully")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.getUserImages = async (req, res) => {
    const { email } = req.body
    try {
        const userImages = await images.find({ email })
        console.log(userImages);
        res.status(200).json(userImages)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.getAllImages = async (req, res) => {
    try {
        const allImages = await images.find()
        res.status(200).json(allImages)
    }
    catch (err) {
        res.status(401).json(err)
    }
}