import mongoose from "mongoose";
import express  from "express";
const app = express();
const port = 5000;
app.use(express.json());
app.listen(port, ()=> console.log(`Server started on port ${port}`))
mongoose.connect("mongodb+srv://flippo:3GToHXDHQT4quNzu@cluster0.fo89bda.mongodb.net/CrudeMovieDb")


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});