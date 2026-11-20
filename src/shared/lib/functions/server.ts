import "server-only";
import sharp from "sharp";

interface GetBlurDataURLParams {
   src: string;
}

export async function getBlurDataURL({ src }: GetBlurDataURLParams): Promise<string> {
   "use cache";
   const res = await fetch(src);

   const buffer = Buffer.from(await res.arrayBuffer());
   const tiny = await sharp(buffer).resize(10, 10).webp({ quality: 20 }).toBuffer();
   const blur = `data:image/webp;base64,${tiny.toString("base64")}`;

   return blur;
}
