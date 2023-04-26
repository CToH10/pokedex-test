<template>
	<Fragment>
		<main>
			<ListPokemon />
		</main>
		<aside>
			<PokeTeam />
		</aside>
	</Fragment>
</template>

<script lang="ts">
import ListPokemon from "@/components/ListPokemon.vue";
import PokeTeam from "@/components/PokeTeam.vue";
import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";

@Component({
	components: {
		ListPokemon,
		PokeTeam,
		Fragment,
	},
})
export default class PokeListView extends Vue {}
</script>
