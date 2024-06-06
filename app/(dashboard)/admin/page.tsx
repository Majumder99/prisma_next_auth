import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <>
        <div>Welcome to admin {session?.user.username}</div>
      </>
    );
  }
  return <h2>Please login to see this admin</h2>;
};

export default Admin;
