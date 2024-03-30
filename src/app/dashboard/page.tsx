import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div>
      <p>you are authenticated</p>
      <pre>
        <code>{JSON.stringify(session)}</code>
      </pre>
      <form
        action={async () => {
          "use server";
          await signOut({ redirect: true, redirectTo: "/" });
        }}
      >
        <Button>Signout</Button>
      </form>
    </div>
  );
}
