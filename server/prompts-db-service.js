const { MongoClient } = require('mongodb');

/*
  This tutorial was very helpful in setting up MongoDB
  https://developer.mongodb.com/quickstart/node-crud-tutorial
 */
const fetchAll = (callback) => {
  const URI = process.env.MONGOLAB_URI;

  MongoClient.connect(URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    client.db('journal').collection('prompts').find().toArray((err, result) => {
      callback(result);
      client.close();
    });
  });
};

const createNew = (newPrompt) => {
  const URI = process.env.MONGOLAB_URI;

  MongoClient.connect(URI, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    client.db('journal').collection('prompts').insertOne(newPrompt)
      .then((result) => {
        console.log(`New prompt created with the following id: ${result.insertedId}`);
      })
      .finally(() => client.close());
  });
}

exports.fetchAll = fetchAll;
exports.createNew = createNew;
