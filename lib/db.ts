import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["error", "info", "query", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
