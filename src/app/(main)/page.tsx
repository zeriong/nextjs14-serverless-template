"use client";

import Link from "next/link";
import { useUserStore } from "@/store/auth/useUserStore";
import { useEffect } from "react";

export default function Home() {
  const { users, setUser } = useUserStore();

  useEffect(() => {
    setUser([]);
  }, []);

  return (
    <div className="">
      <p>메인페이지입니다.</p>
      <div>
        <ul>
          {users?.map((user: any) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </ul>
      </div>

      <Link href="/admin" type="button">
        어드민으로
      </Link>
    </div>
  );
}
