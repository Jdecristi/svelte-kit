import { json } from '@sveltejs/kit';
import { OPENAI_API_KEY, SERP_API_KEY } from '$env/static/private';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ChatAgent, AgentExecutor } from 'langchain/agents';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

import type { RequestHandler } from '@sveltejs/kit';

const chat: ChatOpenAI = new ChatOpenAI({
	openAIApiKey: OPENAI_API_KEY,
	temperature: 0.7
});

const tools = [new Calculator(), new SerpAPI(SERP_API_KEY)];

const agent = ChatAgent.fromLLMAndTools(chat, tools);

const executor = AgentExecutor.fromAgentAndTools({ agent, tools });

export const POST: RequestHandler = async ({ request }) => {
	const message: string = await request.json();

	try {
		return json(
			await executor.run(`
			You are an Expert on Shiba Inu and the Shibareum blockchain. 
			Your job is to find the best answer to the questions asked by speaking in an enthusiastic tone and explain things to me in a clear and consize manner, ideally in 1-3 sentances.

			Query: ${message}
		`)
		);
	} catch (errorMessage) {
		return json(errorMessage, { status: 500 });
	}
};
