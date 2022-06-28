import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../database/database";

connect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let data = req.body;

    console.log(data);
  }
}
