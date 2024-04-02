import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <form
        className="w-screen h-screen flex items-center justify-center"
        action={async () => {
          "use server";
          await signIn("cognito", { redirect: true, redirectTo: "/dashboard" });
        }}
      >
        <Button> Signin</Button>
      </form>
    </div>
  );
}
