
import { MongoClient } from "mongodb";

const URI = "mongodb+srv://luakenai01:UUBnL7zq4SsjfIkI@cluster0.sxr4gtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotifyaula");

//const songCollection = await db.collection("songs").find({}).toArray();



