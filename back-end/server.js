require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const password = process.env.PASSWORD_DB;
const app = express();
const port = 3000;

const uri = `mongodb+srv://chiaras:${password}@users.5nx4cxl.mongodb.net/?retryWrites=true&w=majority&appName=users`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(bodyParser.json());
app.use(cors());

async function run() {
  try {
    await client.connect();
    const db = client.db('users_db'); // Assicurati di usare il nome del tuo database
    const usersCollection = db.collection('users'); // Assicurati di usare il nome della tua collezione

    // Endpoint per ottenere tutti gli utenti
    app.get('/users', async (req, res) => {
      try {
        const users = await usersCollection.find().toArray();
        res.json(users);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
      }
    });

    // Endpoint per aggiungere un nuovo utente
    app.post('/users', async (req, res) => {
      try {
        const newUser = req.body;
        const result = await usersCollection.insertOne(newUser);
        res.json(result.ops[0]);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add user' });
      }
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);