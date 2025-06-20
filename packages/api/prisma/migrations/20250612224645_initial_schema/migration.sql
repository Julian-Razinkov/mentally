-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('pleasant', 'joyful', 'neutral', 'angry', 'frustrated', 'depressed');

-- CreateTable
CREATE TABLE "MoodNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mood" "Mood" NOT NULL,

    CONSTRAINT "MoodNote_pkey" PRIMARY KEY ("id")
);
