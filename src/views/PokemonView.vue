<template>
	<Fragment>
		<main class="pt-5">
			<SinglePokemon />
		</main>
	</Fragment>
</template>

<script lang="ts">
import SinglePokemon from "@/components/SinglePokemon.vue";
import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";

@Component({
	components: {
		SinglePokemon,
		Fragment,
	},
})
export default class PokemonView extends Vue {}
</script>
