const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const generateHash = (str) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(str, salt);
    return hash;
};

router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        console.log(req)
        const hashPassword = generateHash(body.password);
        const findUsers = await User.find({
            $or: [{ email: body.email }, { telephone: body.telephone }],
        });
        if (findUsers.length > 0) {
            return res.status(400).json({ message: "A user with that credentials (Phone No. or Email) already exist!" });
        }
        const user = await User.create({
            name: body.name,
            email: body.email,
            telephone: body.telephone,
            password: hashPassword,
            date: body.date,
            marital: body.marital,
            gender: body.gender,
            nin: body.nin,
            nationality: body.nationality,
            university: body.university,
            score: body.score
        }); //deconstruct
        res.send("User Registered Successfully");
    } catch (error) {
        console.log("error>>>>>>>>>>>>>>>>>>>>",error)
        return res
            .status(400)
            .json({ message: "An error occured, trying to register new user" });
    }
});

router.get(
    "/getallusers",
    async (req, res) => {
        try {
            const query = req.query;
            if (query.total) {
                const users = await User.find({}, { password: 0 })
                    .sort({ _id: 1 })
                    .skip(parseInt(query.total))
                    .limit(50);
                return res.json({ users });
            }
            const totalUsers = await User.count();
            const users = await User.find({}, { password: 0 })
                .sort({ _id: 1 })
                .limit(50);
            res.json({ users, totalUsers });
        } catch (error) {
            return res
                .status(400)
                .json({ message: "Sorry an error occured, please try again later" });
        }
    }
);

module.exports = router;