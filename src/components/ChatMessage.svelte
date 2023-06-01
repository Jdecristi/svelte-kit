<script lang="ts">
	import type { ChatMessage } from '../types/message';

	export let message: ChatMessage;
</script>

{#if message.type !== 'system'}
	<div class={`${message.type} chat-message`}>
		{message.content}
	</div>
{/if}

<style>
	.chat-message {
		margin-top: 10px;
		padding: 10px;
		border-radius: 10px;
		border: 1px solid black;
		width: max-content;
		max-width: 80%;
	}

	.ai {
		background-color: #eee;
	}
	.human {
		background-color: #f59c04;
		color: black;
		margin-left: auto;
	}
</style>
