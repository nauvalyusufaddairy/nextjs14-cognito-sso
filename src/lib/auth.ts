import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { POST, GET },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      issuer: process.env.COGNITO_ISSUER,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
    }),
  ],
});
