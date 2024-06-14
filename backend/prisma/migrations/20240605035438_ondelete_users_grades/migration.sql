-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_tutorId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_gradeId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
