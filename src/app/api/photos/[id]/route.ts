import { getPhotoById } from "@/lib/image-data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Record<string, any> }
) => {
  const photoId = params?.id;
  const data = getPhotoById(photoId);
  return NextResponse.json(data);
};
