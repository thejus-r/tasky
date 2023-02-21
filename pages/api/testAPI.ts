import type { NextApiRequest, NextApiResponse } from 'next'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "POST") {
    const {title, desc, date} = req.body
    console.log("body:", req.body)
    res.status(200).json({title, desc, date});
  }
  else {
    res.status(401).json({message: "Error!"});
  }
}
