
import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

// Initialize the client
// Note: process.env.API_KEY is assumed to be available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (
  userMessage: string, 
  history: { role: string, parts: { text: string }[] }[]
) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // We include the resume context in the system instruction
    const systemInstruction = `
      You are a friendly and professional AI assistant for Guanyu Cai's academic portfolio website.
      Guanyu Cai is a Researcher and Material Scientist.
      Your goal is to answer questions about Guanyu's professional background, research in luminescent materials, patents, and experience based strictly on the provided context.
      
      Context:
      ${RESUME_CONTEXT}
      
      Guidelines:
      - Be professional, academic yet accessible.
      - If asked about contact info, provide the email from the context.
      - If asked about specific chemical formulas (e.g., CaTiO3), explain them briefly based on the context context.
      - If asked something not in the context, politely say you don't have that information but they can contact Guanyu directly.
      - Answer in the same language the user asks (English, Chinese, or French).
    `;

    // Map history to the correct format expected by @google/genai
    // The chat history should be an array of Content objects
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: msg.parts
    }));

    const chat = ai.chats.create({
      model: model,
      history: formattedHistory,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
