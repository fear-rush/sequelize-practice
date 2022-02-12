

const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

const db = require("./models/index");
db.sequelize.sync({force: true});