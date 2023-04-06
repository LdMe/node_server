
import User from "../../models/user.js";
import bcrypt from "bcrypt";


const create = async(req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        let data={
            username : req.body.username.toLowerCase(),
            password : hashedPassword,
            email : req.body.email,
            role : "user",
           }
        let user = await User.create(data);
        res.redirect("/login");
    } catch (error) {
        res.redirect("/register?error="+error.message);
    }
    
}

const logout = (req,res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
}

const loginForm = (req, res) => {
    res.render('user/login');
}
const registerForm = (req, res) => {
    const error = req.query.error;
    res.render('user/register',{error:error});
}
const updateForm = async (req, res) => {
    const error = req.query.error;
    try {
        const user = await User.findById(req.params.id);
        console.log("user",user);
        res.render('user/edit',{userToEdit:user,error:error});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const login = (req,res) =>{
    console.log(req.session);
    res.redirect(req.session.returnTo || "/");
}
// Get user
const getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// Get all users
const getAll = async (req, res) => {
    try {
        const auth = req.user;
        const users = await User.find();
        console.log(users);
        res.render('user/list',{users: users,auth:auth});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Update user
const update = async (req, res) => {
    console.log("file",req.file);
    const { username, password, email, role } = req.body;
    let hashedPassword = "";
    if (password !== "") {
        hashedPassword = await bcrypt.hash(password,10);
    }
    try {

        const user = await User.findById(req.params.id);
        user.username = username !== "" ? username : user.username;
        user.password = password !== "" ? hashedPassword : user.password;
        user.email = email !== "" ? email : user.email;
        user.role = role !== "" ? role : user.role;
        if (req.file) {
            console.log("file",req.file.path.split("public")[1]);
            user.avatar = req.file.path.split("public")[1];
        }
        const updatedUser = await user.save();
        res.redirect("/users");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Delete user
const deletes = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default { create, logout,login,loginForm, registerForm ,updateForm,getById,getAll, update, deletes };


