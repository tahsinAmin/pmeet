-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "height" REAL NOT NULL DEFAULT 0.0,
    "weight" REAL NOT NULL DEFAULT 0.0,
    "born" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "district" TEXT NOT NULL DEFAULT 'District',
    "jers_no" INTEGER NOT NULL DEFAULT 0,
    "ppg" REAL NOT NULL DEFAULT 0.0,
    "rpg" REAL NOT NULL DEFAULT 0.0,
    "apg" REAL NOT NULL DEFAULT 0.0,
    "img" TEXT NOT NULL DEFAULT 'Image'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
