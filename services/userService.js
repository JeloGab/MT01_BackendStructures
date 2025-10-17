import User from "../models/User.js";

const getAllUsers = async () => {
    return await User.find();
}

const createUser = async(data) => {
    const user = new User(data);
    return await user.save();
}
const updateUser = async(id, data) => {
    const user = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return user;
}
const deleteUser = async(id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
};
export default { getAllUsers, createUser, updateUser, deleteUser };