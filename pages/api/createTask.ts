import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "POST") {
    const {title, desc, date} = req.body
    const task = await prisma.task.create({
      data: {
        title,
        desc,
        date
      }
    })
    res.status(200).json(task)
  }
  else {
    res.status(401).json({message: "Error!"});
  }
}
