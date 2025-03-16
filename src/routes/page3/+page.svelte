<script>
	import MyComponent from '$lib/MyComponent.svelte';
	import { teleport } from '$lib/teleport';
</script>

<h1>This is Page 3</h1>
<MyComponent />

<div use:teleport={'aside'}>
    <h2>3</h2>
</div>
