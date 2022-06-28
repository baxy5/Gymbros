import { MongoClient } from "mongodb";

async function connect() {
  MongoClient.connect(process.env.MONGO_URL, (err, client) => {
    if (err) throw err;

    console.log("Database connection successful.");

    return client;
  });
}

export default connect;
