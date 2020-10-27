const { MongoClient } = require("mongodb");
const http = require('http');
const express = require('express');

const app = express();
app.use(express.static('public'));
//app.use(express.bodyParser());

const uri = "mongodb://localhost:27017/myfirstdb";

const client = new MongoClient(uri);

app.post("/blogInsert",function(req,res) {
    let title = req.param("title");
    let content = req.param("content");
    let saved_at = new Date();
    try {
        //mongodb Insert 
            async function run() {
                try {
                    await client.connect();
                    const database = client.db("myfirstdb");
                    const collection = database.collection("blog");
                    // create a document to be inserted
                    const doc = {title: title, content: content, "saved_at":saved_at};
                    const result = await collection.insertOne(doc);
                    console.log(
                        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
                    );
                } finally {
                    await client.close();
                }
        }
        run().catch(console.dir);
    } catch(e) {
        console.log(e);
    }
});

http.createServer(app).listen(52273,function(){
    console.log('서버가동 완');
}); 