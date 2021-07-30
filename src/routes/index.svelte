<script>
	import { onMount } from 'svelte';
	import App from '$lib/threejs/ar.js';

	let xrSupported = null;

	onMount(() => {
		window.focus();
		const app = new App();
		window.app = app;
	});
</script>

{#if xrSupported == null}
	<p>Loading...</p>
{:else if xrSupported == true}
	<div class="xrButton" />
{:else}
	<div>
		<h1>XR is not available on this device. Kindly switch to Chrome for AR experience</h1>
	</div>
{/if}

<style>
</style>
