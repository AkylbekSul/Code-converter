const API_KEY = process.env.GEMINI_API_KEY;
import { GoogleGenerativeAI } from '@google/generative-ai';
const tIdLanguages = {
  'js': 'Javascript',
  'jv': 'Java',
  'py': 'Python'
}

chrome.runtime.onInstalled.addListener(async () => {
  for (let [tld, language] of Object.entries(tIdLanguages)) {
    chrome.contextMenus.create({
      id: tld,
      title: language,
      type: 'normal',
      contexts: ['selection'],
    });
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId in tIdLanguages) {
    const selectedText = info.selectionText;
    const targetLanguage = tIdLanguages[info.menuItemId];
    convertCode(tab.id, selectedText, targetLanguage);
  }
});

async function convertCode(tabID, selectedText, targetLanguage) {
  
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});
  const prompt = `Convert me this code '${selectedText}' to ${targetLanguage}. No need explanation. If it's not a code, then return 'Cannot convert' text`;
  const result = await model.generateContent(prompt);
  const response = result.response;
  const convertedCode = response.text();
  chrome.tabs.sendMessage(tabID, {
    convertedCode: convertedCode,
    selectedText: selectedText
  });
}
