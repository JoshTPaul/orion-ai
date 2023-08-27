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
    try {
      const myBard = new Bard({
        "__Secure-1PSID":
          "aAiChKed0OGNV4Tz6_pOhA0VcU_MhH8JpSvv0sxsVtZYhOOvUmCAkHoxQZ8apCKQTpqyEw.",
        "__Secure-1PSIDTS":
          "sidts-CjIBSAxbGTxL1ZRig6F7o9UrHpBU2GyYEvMZlpywvBxdFCCfqvawSZGVXeOmE9jKhheW8xAA",
        "__Secure-1PSIDCC":
          "APoG2W_fh55GishXZ-aApMRDAptx7PhVt3N8FaXV6FAsCTWeWEHXxZCtV1RL4VofPAGspQ8z0vA",
      });
      const response = await myBard.ask(msg);
      return NextResponse.json({ error: response }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json(
        { error: `Something went wrong ${error}` },
        { status: error?.response?.status }
      );
    }
  }
}
