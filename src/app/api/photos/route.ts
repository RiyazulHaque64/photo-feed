import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = getAllPhotos();
  return NextResponse.json(data);
};
