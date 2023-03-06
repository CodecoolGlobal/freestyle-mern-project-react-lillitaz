import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userData = new Schema({
    userName: String,
    email: String,
    password: String
})

const User = model ('User', userData)
export default User 