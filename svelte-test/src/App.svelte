<script>
export let name;
let eachList=[
		{pro:"one"},
		{pro:"two"},
		{pro:"three"}
	]
</script>

<main>
	<h1>Hello {name}!</h1>
	<ul>
		{#each eachList as item,i}
			<li>{item.pro}</li>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>