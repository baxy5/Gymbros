import { NextApiRequest, NextApiResponse } from "next";

import connect from "../../database/database"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const connection = await connect("WorkoutTracer", "workout")
        const result = connection.find({}).toArray((err, result) => {
            if (err) throw err

            res.status(200).send(result)
            console.log("Data recieve succesful: " + result?.length)
        })
    }
}