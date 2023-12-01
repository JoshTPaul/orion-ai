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
      apiKey: `${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
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
