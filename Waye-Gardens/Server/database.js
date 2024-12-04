import {MongoClient, ServerApiVersion} from 'mongodb';

const password = "Lesotho1726";
const userName = "lk669";
const server =  "cluster0.jocm7ve.mongodb.net";


const encodedUsername = encodeURIComponent(userName);
const encodedPassword = encodeURIComponent(password);

const connectionURL = `mongodb+srv://${encodedUsername}:${encodedPassword}@${server}/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionURL, { 
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});


export async function connectToDatabase(){
    try{
        await client.connect();
        return client.db("Waye-Gardens")
    }catch(error){
        console.log("error connecting to the database:", error);
        throw error;
    }
}