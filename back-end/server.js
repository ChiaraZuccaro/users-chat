const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chiaras:j7VCJn8M9ZmDLyVf@users.5nx4cxl.mongodb.net/?retryWrites=true&w=majority&appName=users";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Chat GPT
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3000;
// const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(bodyParser.json());
// app.use(cors());

// client.connect(err => {
//     if (err) {
//         console.error('Error connecting to MongoDB', err);
//         process.exit(1);
//     }
//     const db = client.db('<dbname>');
//     const usersCollection = db.collection('users');

//     app.get('/users', async (req, res) => {
//         const users = await usersCollection.find().toArray();
//         res.json(users);
//     });

//     app.post('/users', async (req, res) => {
//         const newUser = req.body;
//         await usersCollection.insertOne(newUser);
//         res.json(newUser);
//     });

//     app.listen(port, () => {
//         console.log(`Server running on http://localhost:${port}`);
//     });
// });