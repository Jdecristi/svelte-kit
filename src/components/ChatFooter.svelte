<script lang="ts">
	export let error: string;
	export let loading: boolean;
	export let inputMessage: string;
	export let sendMessages: () => void;

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			sendMessages();
		}
	};
</script>

<div class="chat-footer">
	{#if error}
		<div class="error-container">
			<span class="error">{error}</span>
		</div>
	{/if}
	{#if loading}
		<div class="loading-container">
			<span class="loading">Shiba is typing...</span>
		</div>
	{/if}
	<div class="input-container">
		<textarea
			bind:value={inputMessage}
			placeholder="Type a message"
			rows="1"
			on:keydown={handleKeyDown}
		/>
		<button on:click={sendMessages}
			><img class="send-icon" src="/send-icon.svg" alt="Send Icon" /></button
		>
	</div>
</div>

<style>
	.chat-footer {
		margin-top: auto;
	}

	.error-container {
		text-align: center;
	}

	.error {
		color: red;
	}

	.loading-container {
		text-align: left;
	}

	.loading {
		color: gray;
	}

	.input-container {
		margin-top: 12px;
		display: flex;
		gap: 10px;
		align-items: end;
		justify-content: center;
	}

	textarea {
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
		padding: 8px 12px;
		border: 1px solid black;
		border-radius: 10px;
		font-size: 16px;
		width: 80%;
	}

	textarea:focus {
		outline: none;
	}

	button {
		padding: 4px 8px 8px 12px;
		border: 1px solid black;
		border-radius: 10px;
		background-color: #333;
		color: white;
		font-size: 20px;
		cursor: pointer;
	}
	.send-icon {
		height: 12px;
		transform: rotate(-45deg);
	}

	@media (max-width: 600px) {
		.input-container {
			flex-direction: column;
		}
		textarea {
			width: 100%;
		}
		button {
			width: 100%;
		}
	}
</style>
