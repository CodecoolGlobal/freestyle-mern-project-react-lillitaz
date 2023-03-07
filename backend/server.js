import mongoose from "mongoose";
import express  from "express";
import User from "./model/User.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, ()=> console.log(`Server started on port ${port}`))

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/create',(req,res)=>{
    const email = req.body.email
    const userName = req.body.userName
    const password = req.body.password
    const user =  new User({
        email,
        userName,
        password
    });
    user.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({success: false})) 
})

app.post('/api/login', (req, res) => {
    const { userName, password } = req.body;
  
    
    User.findOne({ userName, password })
      .then(user => {
        if (user) {
         
          res.json({ success: true });
        } else {
       
          res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
      })
      .catch(err => {
        
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
      });
  });
