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
    Credentials({
      id: "1",
      name: "credential1",
      credentials: {
        username: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(Credentials) {
        return null;
      },
    }),
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      issuer: process.env.COGNITO_ISSUER,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
    }),
  ],
});
