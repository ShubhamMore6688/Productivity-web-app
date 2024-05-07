import { Router } from "express";
import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
    const encryPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        email, 
        password: encryPassword
    })
    const token = jwt.sign({_id: user._id}, "kfdjsklfdfjdfkajdsfkjad");
    res.status(200).cookie("token", token, {
        httpOnly: true
    }).json({
        success: true,
        message: "User registerd successfully"
    })
}


export const login = async (req,res) => {
    const {email, password} = req.body;

    let user = await User.findOne({email});

    if(user){
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(404).json({
                success: false,
                message: "Password is incorrect"
            })
        }
        const token = jwt.sign({_id: user._id}, "kfdjsklfdfjdfkajdsfkjad");
        console.log(token)
        res.status(200).cookie("token", token, {
            httpOnly: true
        }).json({
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