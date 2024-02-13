-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "experienceLevel" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
