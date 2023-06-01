<script lang="ts">
	import { sendMessages, chatMessage } from '../helpers/chat';
	import ChatMessages from './ChatMessages.svelte';
	import ChatFooter from './ChatFooter.svelte';

	import type { ChatMessage } from '../types/message';

	let messages: ChatMessage[] = [
		chatMessage(
			"I'm Shiba, an AI language model programmed to help you understand SHIBA and the Shibareum blockchain. What Can I help you with today?",
			'ai'
		)
	];
	let inputMessage = '';
	let error = '';
	let loading = false;

	const handleClick = async () => {
		const message = inputMessage.trim();

		if (message !== '') {
			messages = [...messages, chatMessage(message)];
			inputMessage = '';
			error = '';
			loading = true;

			try {
				messages = [...messages, chatMessage(await sendMessages(message), 'ai')];
			} catch (errorMessage) {
				error = `${errorMessage}`;
			} finally {
				loading = false;
			}
		}
	};
</script>

<div class="chat-container">
	<h1>Shiba Chat Bot</h1>
	<ChatMessages {messages} />
	<ChatFooter {loading} {error} bind:inputMessage sendMessages={handleClick} />
</div>

<style>
	.chat-container {
		width: 80vw;
		max-width: 500px;
		height: 80vh;
		padding: 20px;
		background-color: #ffffff;
		border: 2px solid black;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
	}

	h1 {
		text-align: center;
		margin-top: 0;
	}
</style>
