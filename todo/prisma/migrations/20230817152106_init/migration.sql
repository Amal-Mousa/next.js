-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "string" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
