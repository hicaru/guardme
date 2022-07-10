<script lang="ts">
	import Router from 'svelte-spa-router';
</script>

{#if loaded}
	<Router  {routes} />
{/if}

<style lang="scss">
	@import "./styles/general";
</style>
