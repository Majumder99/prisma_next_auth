"use client";
import { useSession } from "next-auth/react";
import React from "react";

const User = () => {
  const { data } = useSession();
  console.log("data", data);
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};

export default User;
