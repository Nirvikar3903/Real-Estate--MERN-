import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const {username, email ,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({username, email ,password : hashedPassword} );
    try {

        await newUser.save();// save user data awaits untill it saves 
        res.status(201).json("User created successfully !" );
        
    } catch (error) {
        res.status(500).json(error.message )
        
    }
};