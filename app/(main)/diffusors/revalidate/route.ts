import { allDiffusorsTag } from "@/entities/diffusor";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
   const secret = request.headers.get("x-webhook-secret");

   if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Доступ запрещен" }, { status: 401 });
   }

   revalidateTag(allDiffusorsTag, { expire: 0 });

   return NextResponse.json({ revalidated: true });
}
