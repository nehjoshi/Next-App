import mongoose from "mongoose";

const connection = {}

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Connection already established");
            return
        }
        console.log("Establishing connection");
        const db = await mongoose.connect(process.env.DB_CONNECT);
        connection.isConnected = db.connections[0].readyState;
    }
    catch (e) {
        console.log(e.message);
    }
}