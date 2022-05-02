/*
  Warnings:

  - You are about to drop the column `published` on the `User` table. All the data in the column will be lost.
  - Added the required column `body` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdIPAddress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "body" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "published",
ADD COLUMN     "createdIPAddress" TEXT NOT NULL,
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "google" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "twitter" TEXT,
ALTER COLUMN "lastName" SET NOT NULL;
