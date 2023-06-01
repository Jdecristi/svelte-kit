import type { ChatMessage } from '../types/message';

export const sendMessages = async (message: string): Promise<string> => {
	try {
		const response = await fetch('/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(message)
		});

		return await response.json();
	} catch (error) {
		throw new Error(`${error}`);
	}
};

export const chatMessage = (
	text: string,
	type: 'system' | 'human' | 'ai' = 'human'
): ChatMessage => {
	return { type, content: text };
};
