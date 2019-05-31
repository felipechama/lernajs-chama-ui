
<script>
	const handleClick = () => {
		alert('olarrrrrr 2019')
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
