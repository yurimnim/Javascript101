const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017/myfirstdb";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db("myfirstdb");
        const collection = database.collection("member");
        // create a document to be inserted
        const doc = { id: "abc", name: "안철수" };
        const result = await collection.insertOne(doc);

        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
        );
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
