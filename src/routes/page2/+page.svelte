<script>
	import MyComponent from '$lib/MyComponent.svelte';
	import { teleport } from '$lib/teleport';
</script>

<h1>This is Page 2</h1>
<MyComponent />

<div use:teleport={'aside'}>
    <h2>2</h2>
</div>
