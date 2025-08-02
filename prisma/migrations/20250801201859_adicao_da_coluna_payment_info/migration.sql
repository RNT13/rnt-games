/*
  Warnings:

  - You are about to drop the column `paymentInfo` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `paymentInfo`;

-- CreateTable
CREATE TABLE `PaymentInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paymentType` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `transactionId` VARCHAR(191) NULL,
    `orderId` INTEGER NOT NULL,

    UNIQUE INDEX `PaymentInfo_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PaymentInfo` ADD CONSTRAINT `PaymentInfo_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
