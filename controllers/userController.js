import userService from "../services/userService.js";

export const getUser = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}    