'use client';

import { Button } from "@/components/ui/button";

// server action을 client에서 사용하는 방법 1. import, 2. props 로 전달
export default function My() {
  const signOut = async () => {
    // await logout();
  }
  return (
    <div className='flex items-center gap-5'>
      <Button onClick={signOut} variant={'destructive'}>
        Sign Out
      </Button>
    </div>
  );
};


