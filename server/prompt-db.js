const { MongoClient } = require('mongodb');
const { USER_NAME, PASSWORD, DB_TABLE } = require('./credentials');

const main = async () => {
  const URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@promptcluster.yywmq.mongodb.net/${DB_TABLE}?retryWrites=true&w=majority`
  const client = new MongoClient(URI);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

const listDatabases = async (client) => {
  let databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

exports.main = main;