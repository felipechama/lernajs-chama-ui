
<script>
	const handleClick = () => {
		alert('version 1.0.0')
	}
</script>

<style>
	button {
		border: 1px solid red;
	}
</style>

<button on:click={handleClick}>
	<slot></slot>
</button>
