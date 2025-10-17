import User from "../models/User.js";

const getAllUsers = async () => {
    return await User.find();
}

const createUser = async(data) => {
    const User = new User(data);
    return await User.save();
};

export default{getAllUsers,createUser};