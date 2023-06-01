import type { SystemChatMessage, HumanChatMessage, AIChatMessage } from 'langchain/schema';

export type Message = SystemChatMessage | AIChatMessage | HumanChatMessage;
export type ChatMessage = { type: 'system' | 'ai' | 'human'; content: string };
