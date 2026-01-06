import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { caseInfo, suspects, evidence } = await req.json();

    const response = await fetch("https://ai.hackclub.com/proxy/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5.1",
        input: [
          {
            type: "message",
            role: "user",
            content: [
              {
                type: "input_text",
                text: `
You are an analytical assistant for fictional murder mysteries. Analyze the case, the presumed suspects and the evidence.

Rules:
- Do NOT identify a killer
- Do NOT invent facts
- Do NOT be definitive
- Use cautious language (may, appears, suggests)
- Output EXACTLY three sentences

Case information:
${JSON.stringify(caseInfo, null, 2)}

Suspects:
${JSON.stringify(suspects, null, 2)}

Evidence:
${JSON.stringify(evidence, null, 2)}

Provide a brief analytical insight.
`,
              },
            ],
          },
        ],
        max_output_tokens: 120,
      }),
    });

    const data = await response.json();

    function extractAIText(data: any): string {
      if (!data?.output) return "No analysis generated.";

      const texts: string[] = [];

      for (const msg of data.output) {
        if (!msg.content) continue;

        for (const c of msg.content) {
          if (c.type === "output_text" && c.text) {
            texts.push(c.text.trim());
          }
        }
      }

      return texts.join("\n") || "No analysis generated.";
    }

    const analysis = extractAIText(data);

    return NextResponse.json({ analysis });
  } catch (err) {
    console.error("Error in /api/analyze:", err);
    return NextResponse.json({ analysis: "Error generating analysis." }, { status: 500 });
  }
}
