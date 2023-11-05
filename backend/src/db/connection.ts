import {connect, disconnect} from "mongoose";


export async function connectToDB (){
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
    }
}

export async function disconnectFromDB (){
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
    }
}