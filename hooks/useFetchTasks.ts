import prisma from "@/lib/prisma"

export default async function useFetchTasks(date: Date) {
    return await prisma.task.findMany({
        where: {
            date: {
                 lte: `${date.toISOString().slice(0,10)}T23:59:00.000Z`,
                 gte: `${date.toISOString().slice(0,10)}T00:00:00.000Z`
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    })
}