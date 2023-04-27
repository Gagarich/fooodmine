import { Router } from "express"
import { sample_users } from "../data"
import jwt from 'jsonwebtoken'
import asynceHandler from 'express-async-handler'
import { User, UserModel } from "../models/user.model"


const router = Router()

router.get("/seed", asynceHandler(

    async (req, res) => {
        const usersCount = await UserModel.countDocuments()
        if(usersCount > 0) {
            res.send("Seed is already done!")
            return
        }

        await UserModel.create(sample_users)
        res.send("Seed is done!")
    }
))

router.post("/login", asynceHandler(
    async (req, res) => {
        // const body = req.body - then in find, should be using body.email and body.password, but destructuring assignment give magic
        const {email, password} = req.body
        const user = await UserModel.findOne({email, password})
        
            if(user) {
                res.send(generateTokenResponse(user))
            } else {
                res.status(400).send("User name or password is not valid")
            }
    }
))

const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        id: user.id, email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    })

    // user.token = token
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    }
}

export default router