
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, COMPANY_NAME } from "../constants";

// Fix: Always use the process.env.API_KEY directly in the client initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  const model = 'gemini-3-flash-preview';
  
  // Fix: Use COMPANY_NAME.zh as it is an object
  const systemInstruction = `
    你現在是「${COMPANY_NAME.zh}」的專業技術與精品顧問。
    我們公司簡稱為 JINSC。
    
    我們的專業：
    1. 五金零組件：提供精密 CNC 走心式車床加工，擅長處理特殊螺絲、螺母、電子五金。
    2. 刮鬍刀：所有產品皆可依照客人喜好更改與設計，材質都可依需求替換。
    3. 禮品：高品質客製化金屬禮品、筆組、鏡面組。
    
    你的任務：
    1. 回答關於加工精度、材料選型（不鏽鋼、銅、鋁）的問題。
    2. 提供刮鬍刀的使用與客製化建議。
    3. 語氣專業、服務周到。
    
    // Fix: Use category_id as it is the property available in the raw data
    参考產品資料：${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category_id })))}。
  `;

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.6,
      }
    });

    // Fix: text is a property on GenerateContentResponse, not a method
    const response = await chat.sendMessage({ message: prompt });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "很抱歉，系統暫時無法處理您的問題。請直接透過聯絡我們頁面與專員聯繫。";
  }
};