"use client";
import { signOut } from "next-auth/react";

export async function LogoutButton() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="px-2 hover:text-white underline"
      >
        Logout
      </button>
    </>
  );
}
