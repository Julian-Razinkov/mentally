/*
  Warnings:

  - You are about to drop the column `mood` on the `MoodNote` table. All the data in the column will be lost.
  - Added the required column `emotion` to the `MoodNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intencity` to the `MoodNote` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'unknown');

-- CreateEnum
CREATE TYPE "Emotion" AS ENUM ('happy', 'sad', 'angry', 'anxious', 'calm', 'tired', 'lonely', 'stressed', 'grateful');

-- CreateEnum
CREATE TYPE "TestType" AS ENUM ('PHQ9', 'GAD7');

-- CreateEnum
CREATE TYPE "MoodCategory" AS ENUM ('school', 'work', 'money', 'health', 'relationships');

-- AlterTable
ALTER TABLE "MoodNote" DROP COLUMN "mood",
ADD COLUMN     "activityId" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "emotion" "Emotion" NOT NULL,
ADD COLUMN     "intencity" INTEGER NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- DropEnum
DROP TYPE "Mood";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthDate" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "type" "TestType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestAnswer" (
    "id" TEXT NOT NULL,
    "questionNumber" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "testId" TEXT NOT NULL,

    CONSTRAINT "TestAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoodTag" (
    "name" TEXT NOT NULL,
    "category" "MoodCategory" NOT NULL
);

-- CreateTable
CREATE TABLE "TagsOnMoodNotes" (
    "moodNoteId" TEXT NOT NULL,
    "moodTagName" TEXT NOT NULL,

    CONSTRAINT "TagsOnMoodNotes_pkey" PRIMARY KEY ("moodNoteId","moodTagName")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MoodTag_name_key" ON "MoodTag"("name");

-- AddForeignKey
ALTER TABLE "MoodNote" ADD CONSTRAINT "MoodNote_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAnswer" ADD CONSTRAINT "TestAnswer_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnMoodNotes" ADD CONSTRAINT "TagsOnMoodNotes_moodNoteId_fkey" FOREIGN KEY ("moodNoteId") REFERENCES "MoodNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnMoodNotes" ADD CONSTRAINT "TagsOnMoodNotes_moodTagName_fkey" FOREIGN KEY ("moodTagName") REFERENCES "MoodTag"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
