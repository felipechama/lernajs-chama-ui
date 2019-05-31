
<script>
	const handleClick = () => {
		alert('olar')
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
