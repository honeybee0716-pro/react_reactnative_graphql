/*
  Warnings:

  - You are about to drop the column `passwordResetTimestamp` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordResetTimestamp",
ADD COLUMN     "passwordResetCodeTimestamp" TIMESTAMP(3),
ADD COLUMN     "verifyEmailCode" INTEGER,
ADD COLUMN     "verifyEmailCodeTimestamp" TIMESTAMP(3);
