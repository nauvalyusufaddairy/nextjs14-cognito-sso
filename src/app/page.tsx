"use client  ";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    // <form
    //   action={async () => {
    //     "use server";
    //     try {
    //       await signIn("credentials", {
    //         username: "1",
    //         password: "test",
    //         redirect: true,
    //         redirectTo: "/dashboard",
    //       });
    //     } catch (e) {
    //       console.log("lari sia naon nya anjintgl", e);
    //     }
    //   }}
    // >
    <Button
      onClick={() =>
        signIn("credentials", {
          username: "1",
          password: "test",
          redirect: true,
          callbackUrl: "/dashboard",
        })
      }
    >
      signin
    </Button>
    // </form>
  );
}
