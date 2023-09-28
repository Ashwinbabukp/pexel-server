const users = require('../model/userSchema')

exports.register = async (req, res) => {
    const { email, pswd, uname } = req.body
    try {
        const newuser = new users({
            email,
            pswd,
            uname,
        })
        await newuser.save()
        console.log(newuser);
        res.status(200).json("New user added successfully")
    } catch (error) {
        res.status(401).json(error);
    }
}

exports.login = async (req, res) => {
    const { email, pswd } = req.body
    try {
        const user = await users.findOne({ email })
        console.log(user);
        if (user) {
            if (user.pswd === pswd) {
                res.status(200).json(user)
            }
            else {
                res.status(406).json("Invalid password")
            }
        }
        else {
            res.status(404).json("User not found")
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.getUser = async (req, res) => {
    const { email } = req.body
    try {
        const userData = await users.findOne({ email })
        console.log(userData);
        res.status(200).json(userData)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.editUser = async (req, res) => {
    const { email, place, social, paypal } = req.body
    try {
        const userData = await users.findOne({ email })
        userData.place = place
        userData.social = social
        userData.paypal = paypal
        await userData.save()
        res.status(200).json(userData)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

