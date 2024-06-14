import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import ConnectToDB from '../config/connection.js';
import model from '../model/User.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/user", async (req, res) => {
    ConnectToDB()
    const data = await model.find({}, " -_id -__v -password");
    res.status(200).send({ message: "successfully !", data });
})

app.get("/api/user/:username", async (req, res) => {
    ConnectToDB()
    const { username } = req.params;
    const data = await model.find({ username }, " -_id -__v -password");
    res.status(200).send({ message: "successfully !", data });
})

app.post("/api/user", async (req, res) => {
    ConnectToDB()
    const { username, email, password } = req.body;
    await model.create({ username, email, password });
    res.status(201).send({ message: "successfully !" });
})

app.put("/api/user", async (req, res) => {
    ConnectToDB()
    const { username, email, password } = req.body;
    await model.findOneAndUpdate({ username }, { email, password });
    res.status(200).send({ message: "successfully !" });
})

app.delete("/api/user", async (req, res) => {
    ConnectToDB()
    const identifier = req.body.username || req.body.email;
    await model.findOneAndDelete({ $or: [{ username: identifier }, { email: identifier }] });
    res.status(200).send({ message: "successfully !" });
})

app.listen(3000, () => {
    console.log("connected to server on port 3000");
})