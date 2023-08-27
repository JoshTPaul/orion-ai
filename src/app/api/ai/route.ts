import { msgConstructor } from "@/app/utils";
import axios from "axios";
import { ChatGPTAPI } from "chatgpt";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
  try {
    const body = await req.json();
    const { devData, designData } = body;
    const msg = await msgConstructor(designData, devData);
    const api = new ChatGPTAPI({
      apiKey: "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",
      completionParams: {
        temperature: 0,
      },
    });
    const res = await api.sendMessage(msg);
    return await NextResponse.json(
      {
        res,
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
