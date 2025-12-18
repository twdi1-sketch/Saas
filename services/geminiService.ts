import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the client. API key is expected in process.env.API_KEY
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MODEL_NAME = 'gemini-3-flash-preview';
const IMAGE_MODEL_NAME = 'gemini-2.5-flash-image';

const SYSTEM_INSTRUCTION = `
You are the "Web Design Inc AI Assistant", a virtual assistant embedded in the Web Design Inc business platform.
Your goal is to demonstrate the capabilities of the platform to potential customers visiting the landing page.
Keep responses concise, professional, yet friendly.
You can help with:
1. Explaining features (CRM, Lead Gen, Automation).
2. Simulating how you would handle a lead (e.g., "I can qualify this lead for you instantly").
3. Answering questions about pricing ($99/mo).
4. Scheduling (simulate booking a demo).

If asked about capabilities, emphasize that you run 24/7, never miss a lead, and cost significantly less than a human hiring.
`;

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode without an active connection. Please configure the API Key to chat with me live!";
  }

  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
        message: message 
    });

    return result.text || "I didn't catch that. Could you please repeat?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing high traffic right now. Please try again in a moment.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!apiKey) return null;
  try {
    const response = await ai.models.generateContent({
      model: IMAGE_MODEL_NAME,
      contents: { parts: [{ text: prompt }] },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};
