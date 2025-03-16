<script>
	import MyComponent from '$lib/MyComponent.svelte';
	import { teleport } from '$lib/teleport';
</script>

<h1>This is Page 1</h1>
<MyComponent val="- 1 -"/>

<div use:teleport={'aside'}>
    <h2>1</h2>
</div>
