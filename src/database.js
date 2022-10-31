import mongoose from "mongoose";
//localhost = 127.0.0.1
// const url = 'mongodb://localhost:27017/cafe-benito-santos'; //local
const url = "mongodb+srv://jony:nDXq7Hu1kLQLLA4d@clustercomision7i.3qcgclh.mongodb.net/cafe-benitos-santos"; //produccion

mongoose.connect(url, {
    family: 4
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})