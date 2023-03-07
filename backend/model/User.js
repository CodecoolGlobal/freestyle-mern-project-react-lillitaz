import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userData = new Schema({
   
    email: String,
    userName: String,
    password: String
})

const User =  model ('User', userData)

export default User
