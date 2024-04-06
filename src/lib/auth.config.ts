import { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, user, credentials, email, profile }) {
      console.log("signIn callback account", account);
      console.log("signIn callback user", user);
      console.log("signIn callback credentials", credentials);
      console.log("signIn callback email", email);
      console.log("signIn callback profile", profile);

      return true;
    },
    async session({ newSession, session, token, trigger, user }) {
      console.log("session callback newSession", newSession);
      console.log("session callback session", session);
      console.log("session callback token", token);
      console.log("session callback trigger", trigger);
      console.log("session callback user", user);
      return session;
    },
  },
} satisfies NextAuthConfig;
