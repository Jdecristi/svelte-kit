<script>
	import Chat from '../components/Chat.svelte';
</script>

<main>
	<div class="forground">
		<Chat />
	</div>
	<img class="background" src="/background.png" alt="SHIB" />
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: Arial, Helvetica, sans-serif;
		background-color: #fbfcfc;
	}
	.forground {
		z-index: 1;
	}
	.background {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.75);
		opacity: 0.1;
		z-index: 0;
	}
</style>
