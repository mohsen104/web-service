import mongoose from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        pattern: "[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+",
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
}, { timestamps: true })

const model = mongoose.models.user || mongoose.model("user", schema);

export default model;