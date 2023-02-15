-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "start" DATETIME NOT NULL,
    "end" DATETIME,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
