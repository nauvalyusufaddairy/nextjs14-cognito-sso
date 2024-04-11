import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/dbConnect";
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },
  //@ts-ignore
  adapter: PrismaAdapter(prisma as any),
  ...authConfig,
});
