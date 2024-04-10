"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div>
      <Button
        onClick={() =>
          signIn("google", { redirect: true, callbackUrl: "/private" })
        }
      >
        add
      </Button>
    </div>
  );
}
