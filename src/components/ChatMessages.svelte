<script lang="ts">
	import ChatMessage from './ChatMessage.svelte';

	import type { ChatMessage as Message } from '../types/message';

	export let messages: Message[];
</script>

<div class="chat-messages-container">
	{#each messages as message}
		<ChatMessage {message} />
	{/each}
</div>
