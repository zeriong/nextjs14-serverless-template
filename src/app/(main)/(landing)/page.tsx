"use client";

import Link from "next/link";
import { useUserStore } from "@/store/auth/useUserStore";
import { useEffect } from "react";

export default function Home() {
  const { users } = useUserStore();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => console.log("통신 성공", res))
      .catch((error) => console.log("통신 실패", error));
  }, []);

  return (
    <div className="p-[30px]">
      <p>메인페이지입니다.</p>
      <div>
        <ul>{users?.map((user: any) => <div key={user?.id}>{user?.name}</div>)}</ul>
      </div>

      <Link href="/admin" type="button">
        어드민으로
      </Link>
    </div>
  );
}
