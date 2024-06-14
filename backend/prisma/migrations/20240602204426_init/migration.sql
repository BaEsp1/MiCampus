-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "dni" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "id_grade" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
