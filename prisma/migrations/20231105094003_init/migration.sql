-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BlogCategorie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "BlogPosts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT,
    "view" INTEGER NOT NULL DEFAULT 0,
    "catSlug" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "BlogPosts_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "BlogCategorie" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BlogPosts_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BlogComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "postSlug" TEXT NOT NULL,
    CONSTRAINT "BlogComment_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BlogComment_postSlug_fkey" FOREIGN KEY ("postSlug") REFERENCES "BlogPosts" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BlogCategorie_id_key" ON "BlogCategorie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BlogCategorie_slug_key" ON "BlogCategorie"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPosts_id_key" ON "BlogPosts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPosts_slug_key" ON "BlogPosts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BlogComment_id_key" ON "BlogComment"("id");
