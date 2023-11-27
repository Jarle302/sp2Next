import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const openai = new OpenAI({ apiKey: process.env.API });

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: req.body }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
    return completion.choices[0].message.content;
  }

  const body = await main();

  return NextResponse.json({ message: body }, { status: 200 });
}
