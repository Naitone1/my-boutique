import { prisma } from '@/lib/prisma'
import { compare, hash } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password 
        );

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
          randomKey: 'CredentialLogged'
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET?? '',
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Check if the user already exists in your database
      try {
        // Check if the user already exists in your database
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email??'' },
        });
        if (!existingUser) {
          // Create a new user in your database
          await prisma.user.create({
          data: {
            email: user.email??'',
            name: user.name??'',
            password: await hash(user.email??'', 12)
            // Add other user properties here
          },
        });
      }
      return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        throw error;
      }
    },
    session: ({ session, token }) => {
      // console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      // console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }