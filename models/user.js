/*
Mongoose model for User
*/
import mongoose from "../config/mongoose.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    }
});
// add verifyPassword method to userSchema
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;

