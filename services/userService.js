import User from "../models/User.js";

const getAllUsers = async () => {
    return await User.find();
}

const createUser = async(data) => {
    const user = new User(data);
    return await user.save();
};

export default { getAllUsers, createUser };