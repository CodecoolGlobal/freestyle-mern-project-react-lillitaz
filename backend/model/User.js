import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userData = new Schema({
    email: String,
    userName: String,
    hashedPassword: String,
    favorites: [{
        title: String,
        year: Number,
        poster: String,
        imdbId: Number
    }]
})

const User =  model ('User', userData)

export default User;
