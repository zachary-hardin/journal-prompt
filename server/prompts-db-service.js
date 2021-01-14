const { MongoClient } = require('mongodb');

/*
  This tutorial was very helpful in setting up MongoDB
  https://developer.mongodb.com/quickstart/node-crud-tutorial
 */

const URI = process.env.MONGOLAB_URI;
const promptsCollection = (client) => {
  return client.db('journal').collection('prompts');
};

const fetchAll = (callback) => {
  MongoClient.connect(URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    promptsCollection(client).find().toArray((err, result) => {
      callback(result);
      client.close();
    });
  });
};

const createNew = (newPrompt, callback) => {
  MongoClient.connect(URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    promptsCollection(client).insertOne(newPrompt)
      .then((result) => {
        console.log(`✅ New prompt created with the following id: ${result.insertedId}`);
        callback(201);
      })
      .catch((err) => {
        console.log(`🆘 Unable to insert new prompt: \n${err}`);
        callback(409);
      })
      .finally(() => {
        client.close();
      });
  });
};

exports.fetchAll = fetchAll;
exports.createNew = createNew;
