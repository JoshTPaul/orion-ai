import { msgConstructor } from "@/app/utils";
import { ChatGPTAPI } from "chatgpt";
import { NextResponse } from "next/server";
import Bard from "bard-ai";

export async function POST(req: Request, res: any) {
  const body = await req.json();
  const { inputArr } = body;
  const msg = await msgConstructor(inputArr);
  try {
    const api = new ChatGPTAPI({
      apiKey: "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",
      completionParams: {
        temperature: 0,
      },
    });
    const res: any = await api.sendMessage(msg);
    return await NextResponse.json(
      {
        res,
      },
      { status: res?.data?.status }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: `Something went wrong ${error}` },
      { status: error?.response?.status }
    );
  }
}
