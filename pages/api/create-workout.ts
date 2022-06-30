import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../database/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    let data = req.body;
    console.log(data);

    const connection = await connect("WorkoutTracer", "workout");
    const result = connection.insertOne({ data, createdAt: new Date() }, (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}
