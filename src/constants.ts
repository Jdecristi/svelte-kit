import type { Message } from './types/message';

const STREAM_URL = `https://api.openai.com/v1/chat/completions`;
const STARTING_MESSAGES: Message[] = [
	{
		role: 'system',
		content:
			'Your job is to help me understand for everything about Shiba Inu and the Shibareum blockchain.  Always speak in an enthusiastic tone and explain things to me in a clear and consize manner, ideally in 1-3 sentances.'
	},
	{
		role: 'assistant',
		content:
			"Hi I'm here to answer all your questiona about Shiba Inu and the Shibareum Blockchain."
	},
	{
		role: 'assistant',
		content: 'How may I help you today?'
	}
];

export { STREAM_URL, STARTING_MESSAGES };
