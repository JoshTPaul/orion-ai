import { msgConstructor } from "@/app/utils";
import axios from "axios";
import { ChatGPTAPI } from "chatgpt";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
  try {
    const body = await req.json();
    const { ref } = body;
    const figmaData = await axios.get(
      "http://localhost:3000/api/get-figma-data"
    );

    const { document, title, lastModified, thumbnailUrl } =
      figmaData?.data?.data;

    const msg = await msgConstructor(ref, document?.children);
    console.log("🚀 ~ file: route.ts:18 ~ POST ~ msg:", { msg, ref, document });
    // const api = new ChatGPTAPI({
    //   apiKey: "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",
    // });
    // const res = await api.sendMessage(msg);
    return await NextResponse.json(
      {
        r: "res",
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
