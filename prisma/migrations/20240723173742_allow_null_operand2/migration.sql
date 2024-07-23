-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Operation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "operand1" REAL NOT NULL,
    "operand2" REAL,
    "result" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Operation" ("createdAt", "id", "operand1", "operand2", "result", "type") SELECT "createdAt", "id", "operand1", "operand2", "result", "type" FROM "Operation";
DROP TABLE "Operation";
ALTER TABLE "new_Operation" RENAME TO "Operation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
