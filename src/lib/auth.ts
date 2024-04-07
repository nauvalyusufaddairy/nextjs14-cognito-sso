import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./dbConnect";

export const {
  handlers: { POST, GET },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
