/*
  Warnings:

  - You are about to drop the column `posted` on the `Film` table. All the data in the column will be lost.
  - You are about to drop the `Decade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DecadeToFilm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DirectorToFilm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilmToGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DecadeToFilm" DROP CONSTRAINT "_DecadeToFilm_A_fkey";

-- DropForeignKey
ALTER TABLE "_DecadeToFilm" DROP CONSTRAINT "_DecadeToFilm_B_fkey";

-- DropForeignKey
ALTER TABLE "_DirectorToFilm" DROP CONSTRAINT "_DirectorToFilm_A_fkey";

-- DropForeignKey
ALTER TABLE "_DirectorToFilm" DROP CONSTRAINT "_DirectorToFilm_B_fkey";

-- DropForeignKey
ALTER TABLE "_FilmToGenre" DROP CONSTRAINT "_FilmToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilmToGenre" DROP CONSTRAINT "_FilmToGenre_B_fkey";

-- AlterTable
ALTER TABLE "Film" DROP COLUMN "posted",
ADD COLUMN     "genreId" INTEGER;

-- DropTable
DROP TABLE "Decade";

-- DropTable
DROP TABLE "Director";

-- DropTable
DROP TABLE "_DecadeToFilm";

-- DropTable
DROP TABLE "_DirectorToFilm";

-- DropTable
DROP TABLE "_FilmToGenre";

-- AddForeignKey
ALTER TABLE "Film" ADD CONSTRAINT "Film_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
