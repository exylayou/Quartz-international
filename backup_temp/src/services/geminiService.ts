import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

const SYSTEM_INSTRUCTION = `
You are the Aura Cabinetry AI Assistant. You help users with kitchen remodeling, cabinetry styles, materials, and pricing.
Aura Cabinetry (formerly Solid State Interiors) specializes in high-end modular cabinetry and premium quartz countertops (Caesarstone, Cambria, Silestone).

Key Information:
- Palette: Obsidian, Gold, White.
- Manufacturing: Vaughan / Markham HQ.
- Next Install Slot: 5-7 Days.
- Specialties: Handleless (Gola), Shaker, Slim Shaker, Modern Flat Panel.
- Countertops: Level 1-5 (Builders to Ultra-Premium).
- Process: Online estimate -> In-home laser measure -> 10-day production -> Professional install.

Be professional, helpful, and keep responses concise. If asked about pricing, mention the calculator for a 'Smart Estimate'.
`;

export async function getAIChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({ message: message });
    return result.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "I'm having a bit of trouble connecting right now. Please try again or check our calculator for pricing.";
  }
}
