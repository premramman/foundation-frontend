/**
 * Augument NextAuth with custom properties
 */
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User {
    type?: string;
    accessToken?: string;
    expires?: string;
    locale?: string;
  }

  interface Session {
    user?: {
      type?: string;
      accessToken?: string;
      expires?: string;
      locale?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    type?: string;
    accessToken?: string;
    expires?: string;
    locale?: string;
  }
}