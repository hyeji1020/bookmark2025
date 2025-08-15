'use client';

import { logout } from "@/actions/sign";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// server action을 client에서 사용하는 방법 1. import, 2. props 로 전달
export default function My() {
  const signOut = async () => {
    await logout();
  }
  return (
    <div className="flex items-center gap-5">
      <Button onClick={signOut} variant={'destructive'}>
        Sign Out
      </Button>
      <Link href="/api/auth/signout">Go LogOut</Link>
    </div>
  );
};
