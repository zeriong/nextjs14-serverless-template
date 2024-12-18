"use server";

import { cookies } from "next/headers";

/** next 서버사이드 쿠키 */

export async function getServerSideCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function setServerSideCookie(name: string, value: string) {
  const cookieStore = await cookies();
  return cookieStore.set(name, value);
}

export async function removeServerSideCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.delete(name);
}
