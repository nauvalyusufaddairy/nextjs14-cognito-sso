import { auth } from "@/lib/auth";
import NextAuth from "next-auth";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, AUTHJS_PREFIX } from "@/lib/routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isPublicRoutes = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isPrivateRoutes = PRIVATE_ROUTES.includes(nextUrl.pathname);
  const isNextauthApiPrefix = nextUrl.pathname.startsWith(AUTHJS_PREFIX);
  const isLoggedIn = !!req.auth;

  if (isNextauthApiPrefix) {
    return null;
  }
  if (isPrivateRoutes) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  if (isPublicRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }
});
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
