<template>
	<Fragment>
		<main class="pt-5">
			<SinglePokemon />
		</main>
		<aside>
			<PokeTeam />
		</aside>
	</Fragment>
</template>

<script lang="ts">
import SinglePokemon from "@/components/SinglePokemon.vue";
import PokeTeam from "@/components/PokeTeam.vue";
import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";

@Component({
	components: {
		SinglePokemon,
		PokeTeam,
		Fragment,
	},
})
export default class PokemonView extends Vue {}
</script>
