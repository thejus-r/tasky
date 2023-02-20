import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { date } = req.query
  const data = await prisma.task.findMany({
    where: {
        date: {
             lte: `${date}T23:59:00.000Z`,
             gte: `${date}T00:00:00.000Z`
        }
    },
    orderBy: {
        createdAt: "desc"
    }
})
  res.status(200).json(data)
}

// date.toISOString().slice(0,10)