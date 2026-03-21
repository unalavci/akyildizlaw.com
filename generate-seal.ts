import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateSeal() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A professional, high-end close-up of a red wax seal on a clean, premium cream-colored parchment paper. No handwriting, no text on the paper. The wax seal should be detailed, elegant, and have a subtle law-related symbol like a scale or a classic emblem. Soft, prestigious lighting. 4k resolution, professional photography.',
        },
      ],
    },
    config: {
      imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
      }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      console.log(part.inlineData.data);
    }
  }
}

generateSeal();
