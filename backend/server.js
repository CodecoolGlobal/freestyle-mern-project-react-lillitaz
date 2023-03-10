import mongoose from "mongoose";
import express from "express";
import User from "./model/User.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server started on port ${port}`));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/users', (req, res) => {
  const userName = req.query.userName;

  User.findOne({ userName })
    .then(user => {
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      res.json(user.favorites);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    });
});

app.post("/api/create", (req, res) => {
  const { email, userName, password } = req.body;
  const user = new User({
    email,
    userName,
    password,
  });
  console.log(user);
  user
    .save()
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

app.post("/api/login", (req, res) => {
  const { userName, password } = req.body;

  User.findOne({ userName, password })
    .then((user) => {
      if (user) {
        res.json({ success: true });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid username or password" });
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
});

app.post('/api/favorites', requireLogin, async (req, res) => {
  try {
    const { currentUser } = req.body;
    const { title, year, poster, imdbId } = req.body;

    const user = await User.findOne({ userName: currentUser });

    if (!user) {
      res.status(401).json({ success: false, message: 'User not found' });
    } else {
      user.favorites.push({ title, year, poster, imdbId });
      await user.save();
      res.status(200).json({ success: true, favorites: user.favorites });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Could not save' });
  }
});

function requireLogin(req, res, next) {
  if (!req.body.currentUser) {
    res
      .status(401)
      .json({
        success: false,
        message: "You must be logged in to perform this action",
      });
  } else {
    next();
  }
}

app.delete("/api/users/:userName/favorites/:favId", (req, res) => {
  const userName = req.params.userName;
  const favId = req.params.favId;

  if (!favId) {
    return res.status(400).send("Invalid favorite id");
  }

  User.findOneAndUpdate(
    { userName: userName },
    { $pull: { favorites: { _id: favId } } },
    { new: true }
  )
    .then(updatedUser => {
      console.log(updatedUser);
      res.status(200).send("Favorite movie deleted successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});
