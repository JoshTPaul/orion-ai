import axios from "axios";
import { ChatGPTAPI } from "chatgpt";
import { NextResponse } from "next/server";
import { stringify } from "flatted";

export async function POST(req: Request, res: any) {
  try {
    // const body = await req.json();
    // const { ref } = body;
    const figmaData = await axios.get(
      "http://localhost:3000/api/get-figma-data"
    );
    console.log(
      "🚀 ~ file: route.ts:12 ~ POST ~ figmaData:",
      typeof figmaData?.data
    );

    // const api = new ChatGPTAPI({
    //   apiKey: "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",
    // });
    // const res = await api.sendMessage(body?.userResponse);
    return await NextResponse.json(
      {
        data: stringify(figmaData?.data),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Something went wrong ${error}` },
      { status: error?.response?.status }
    );
  }
}
