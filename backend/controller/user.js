import { Router } from "express";
import { User } from "../models/user.js";

export const register = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    let user = await User.findOne({email});

    if(user){
        return res.status(200).json({
            success: false,
            message: "User is already registered"
        })
    }

    user = await User.create({
        email, 
        password
    })
    
    res.status(200).json({
        success: true,
        message: "User registerd successfully"
    })
}


export const login = async (req,res) => {
    const {email, password} = req.body;

    let user = await User.findOne({email});

    if(user){
        if(user.password !== password){
            return res.status(404).json({
                success: false,
                message: "Password is incorrect"
            })
        }

        res.status(200).json({
            success: true,
            message: "login successfull"
        })
    }else{
        return res.status(404).json({
            success: false,
            message: "Invalid user, Register first"
        })
    }
}

export const getUser = async (req,res) => {
    let users = await User.findAll();

    return res.status(200).json({
        success: true,
        message: users
    })
}