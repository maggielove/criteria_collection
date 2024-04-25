/*
  Warnings:

  - You are about to drop the `_FilmToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FilmToUser" DROP CONSTRAINT "_FilmToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilmToUser" DROP CONSTRAINT "_FilmToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "myList" TEXT;

-- DropTable
DROP TABLE "_FilmToUser";
