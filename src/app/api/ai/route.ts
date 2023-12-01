import { msgConstructor } from "@/app/utils";
import { ChatGPTAPI } from "chatgpt";
import { NextResponse } from "next/server";
import Bard from "bard-ai";

export async function POST(req: Request, res: any) {
  const body = await req.json();
  const { inputArr } = body;

  function compareObjects(obj1: any, obj2: any) {
    let count = 0;
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        count++;
      }
    }
    return count;
  }

  // const msg = await msgConstructor(inputArr);
  try {
    // const api = new ChatGPTAPI({
    //   apiKey: `${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    //   completionParams: {
    //     temperature: 0,
    //   },
    // });
    // const res: any = await api.sendMessage(msg);
    // return await NextResponse.json(
    //   {
    //     res,
    //   },
    //   { status: res?.data?.status }
    // );

    const arr = inputArr.map(({ element, design, dev }: any, i: number) => ({
      element,
      totalScore: compareObjects(design, dev),
      maxScore: Object.keys(design).length,
    }));

    return NextResponse.json({
      res: arr,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: `Something went wrong ${error}` },
      { status: error?.response?.status }
    );
  }
}
