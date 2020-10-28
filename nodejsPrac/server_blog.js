var http = require("http");
var express = require("express");
const { MongoClient } = require("mongodb");
var app = express();
app.use(express.static("public"));

app.listen(app.get('52273'), function () {
    console.log('Express server on port ' + app.get('52273'));
});

var ObjectID = require("mongodb").ObjectID;


const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

app.post("/comment", function (req, res) {
    var name = req.param("commenter_name");
    var email = req.param("commenter_email");
    var comment = req.param("comment");
    var id = req.param("article_id");
    var posted_at = new Date();
    var obj = { "comment": { name: name, email: email, comment: comment, posted_at: posted_at } }
    var obj2 = { "$push": obj }
    var _id = new ObjectID(id);
    var q = { _id: _id }


    async function run() {
        try {
            await client.connect();
            const database = client.db("myfirstdb");
            const collection = database.collection("blog");
            const result = await collection.updateOne(q, obj2);

        } finally {
            //	await client.close();
            console.log(obj.comment);
            res.send(obj.comment);
        }
    }
    run().catch(console.dir);

})

app.all("/blogDetail/:_id", function (req, res) {
    var id = req.param("_id");
    console.log(id);
    var _id = new ObjectID(id);
    console.log("ObjectID의 생성...................")
    console.log(_id);
    async function run() {
        try {
            await client.connect();
            console.log("1");
            const database = client.db("myfirstdb");
            console.log("2");
            const collection = database.collection("blog");
            console.log("3");
            collection.find({ _id: _id }).toArray(function (err, docs) {
                //	database.close()
                console.log("요청됨!!!");
                console.log(docs[0]);
                res.send(docs[0]);
            });
        } finally {
            //	await client.close();
        }
    }
    run().catch(console.dir);


});

//삭제하기
app.all("/blogDelete/:id", function (req, res) {
    var id = req.param("id");
    var _id = new ObjectID(id);
    var q = { _id: _id }
    async function run() {
        try {
            await client.connect();
            const database = client.db("myfirstdb");
            const collection = database.collection("blog");
            const result = await collection.deleteOne(q);

        } finally {
            //  await client.close();
            res.send("1");
        }
    }
    run().catch(console.dir);

});

//수정하기
app.post("/blogUpdate", function (req, res) {
    try {
        var title = req.param("title");
        var content = req.param("content");
        var id = req.param("_id");

        var _id = new ObjectID(id);
        var q = { _id: _id }
        var obj = { "$set": { title: title, content: content } };


        async function run() {
            try {
                await client.connect();
                const database = client.db("myfirstdb");
                const collection = database.collection("blog");
                const result = await collection.updateOne(q, obj);

            } finally {
                //  await client.close();
                res.send("1");
            }
        }
        run().catch(console.dir);

    } catch (e) {
        console.log(e);
    }
});



app.all("/blogList", function (req, res) {
    async function run() {
        try {
            await client.connect();
            const database = client.db("myfirstdb");
            const collection = database.collection("blog");
            collection.find({}).toArray(function (err, docs) {
                //	database.close()
                console.log("요청됨!!!");
                console.log(docs);
                res.send(docs);
            });
        } finally {
            //	await client.close();
        }
    }
    run().catch(console.dir);
});


app.post("/blogInsert", function (req, res) {
    try {
        var title = req.param("title");
        var content = req.param("content");
        var saved_at = new Date();

        async function run() {
            try {
                await client.connect();

                const database = client.db("myfirstdb");
                const collection = database.collection("blog");
                // create a document to be inserted
                const doc = { title: title, content: content, saved_at: saved_at };
                const result = await collection.insertOne(doc);

                console.log(
                    `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
                );
            } finally {
                await client.close();
            }
        }
        run().catch(console.dir);

    } catch (e) {
        console.log(e);
    }
    var str = "<p>Article saved. <a href='blogInsert.html'>Write another one?</a></p>";
    res.send(str);
})




http.createServer(app).listen(52273, function () {
    console.log("서버가 가동되었습니다.");
});