/*
  Warnings:

  - You are about to drop the column `id_grade` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "id_grade",
ADD COLUMN     "gradeId" TEXT;

-- CreateTable
CREATE TABLE "Grade" (
    "id" TEXT NOT NULL,
    "school_year" INTEGER NOT NULL,
    "grade" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "tutorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
