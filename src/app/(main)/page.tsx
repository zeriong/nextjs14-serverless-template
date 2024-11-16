import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <p>메인페이지입니다.</p>
      <Link href="/admin" type="button">
        어드민으로
      </Link>
    </div>
  );
}
