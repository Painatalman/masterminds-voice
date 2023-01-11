<script lang="ts">
	import './styles.css';
	const testMessage: string = 'Masterminds voice';
</script>

<svelte:head>
	<title>Masterminds Voice</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-section">
	<h2>
		{testMessage}
	</h2>
</section>

<style>
	.main-section {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100vh;
	}
</style>
