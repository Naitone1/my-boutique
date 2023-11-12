import { PrismaClient } from '@prisma/client'
import Stripe from "stripe";
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query']
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const stripe = new Stripe('sk_test_51OBgP9Hmeewn6SCzx3PHrgE0Fs050L3PrbRsuA7g4IJGmhRnqc8P3OoUJJMgpblU6Y3bV2RUi4v1Mr85wrp3knDK00ntNYUPKJ')
