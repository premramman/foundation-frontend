import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import apiClient from "@/lib/apiClient";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Call your backend login endpoint
          const response = await apiClient.post("auth/login", {
            email: credentials?.email,
            password: credentials?.password
          });

          // Example backend response:
          // { id, name, type, jwt, expires }
          const user = response.data;

          if (user && user.jwt) {
            return {
              id: user.id,
              name: user.name,
              email: credentials?.email,
              type: user.type,
              accessToken: user.jwt,
              expires: user.expires,
              locale: user.locale
            };
          }
          return null;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Store the backend JWT in the token
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.type = user.type;
        token.expires = user.expires;
        token.locale = user.locale;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose JWT and user info in the session
      session.user = {
        ...session.user,
        type: token.type,
        locale: token.locale
      };
      (session as any).accessToken = token.accessToken;
      (session as any).expires = token.expires;
      return session;
    }
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default authOptions;