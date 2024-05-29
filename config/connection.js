import mongoose from "mongoose";

export default async function ConnectToDB() {
    try {
        if (mongoose.connections[0].readyState) {
            return false;
        }
        await mongoose.connect("mongodb://localhost:27017/web-service");
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}