import Link from "next/link";
import React from "react";

export default function Page() {
  // const test = { sss: "sddasf", seer: 123 };

  return (
    <div className="p-[30px]">
      <p>관리자페이지</p>
      <Link href="/">홈으로</Link>
    </div>
  );
}
