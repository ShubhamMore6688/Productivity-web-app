import { Router } from "express";
import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    try {
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
            httpOnly: true,
            path: "/"
        }).json({
            success: true,
            message: "User registerd successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}


export const login = async (req,res) => {
    const {email, password} = req.body;

    try {
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
            res.status(200).cookie("token", token, {
                httpOnly: true,
                path: "/"
            }).json({
                success: true,
                message: "user login successfully"
            })
        
                // console.log(res)
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Invalid user, Register first"
                })
            }
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "internal server error"
        })
    }
    
}

export const logout = (req,res) => {
    try {
       res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
       }).json({
        success: true,
        message: "logout successfully"
       })
    } catch (error) {
        
    }
}


export const getUser = async (req,res) => {
    let users = await User.findAll();

    return res.status(200).json({
        success: true,
        message: users
    })
}