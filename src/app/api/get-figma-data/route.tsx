import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const body = await req.json();
  const { id, nodeId } = body;
  try {
    // kFGBtg88aoYKtNGE0HPONq;
    const response = await axios.get(
      `https://api.figma.com/v1/files/${id}/nodes?ids=${nodeId}`,
      {
        headers: {
          "x-figma-token": `${process.env.NEXT_PUBLIC_FIGMA_API_KEY}`,
        },
      }
    );
    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `Something went wrong on figma api: ${error?.response?.data?.err}`,
      },
      { status: error?.response?.data?.status }
    );
  }
}
