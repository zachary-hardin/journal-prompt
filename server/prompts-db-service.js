const { MongoClient } = require('mongodb');
const { USER_NAME, PASSWORD, DB_TABLE } = require('./credentials');

/*
  This tutorial was very helpful in setting up MongoDB
  https://developer.mongodb.com/quickstart/node-crud-tutorial
 */
const fetchAll = (callback) => {
  const URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@promptcluster.yywmq.mongodb.net/${DB_TABLE}?retryWrites=true&w=majority`;

  MongoClient.connect(URI, { useUnifiedTopology: true}, (err, client) => {
    if (err) throw err;

    client.db('journal').collection('prompts').find().toArray((err, result) => {
      callback(result);
      client.close();
    });
  });
};

exports.fetchAll = fetchAll;