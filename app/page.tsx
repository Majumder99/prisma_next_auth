import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <h1>Home</h1>
        <Link href="/admin" className="bg-green-600">
          Open My admin
        </Link>
      </div>
      <div>
        <h1>client session</h1>
        <User />
      </div>
      <div>
        <h1>server session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </>
  );
}
