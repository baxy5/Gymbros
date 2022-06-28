import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../database/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // undefined Promise
  const client = connect();
  console.log(client);

  if (req.method === "POST") {
    let data = req.body;

    console.log(data);
  }
}
