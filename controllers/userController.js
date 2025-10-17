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

export const updateUser = async (req, res) => {
    try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, req.body);

    if (!updatedUser) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const deleteUser = async (req, res) => {
    try {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}