import prisma from "@/libs/prisma/prisma";

export async function GET() {
  const users = await prisma.user.findMany();

  return new Response(JSON.stringify(users), {
    status: 200,
  });
}
