let MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.MONGO_URL);

async function connect(dbName, collectionName) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  console.log("Database connection successful.");
  return collection;
}

export default connect;
