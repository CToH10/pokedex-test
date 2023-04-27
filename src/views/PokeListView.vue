<template>
	<Fragment>
		<main style="padding-top: clamp(80px, 12vh, 95px)">
			<ListPokemon />
		</main>
	</Fragment>
</template>

<script lang="ts">
import ListPokemon from "@/components/ListPokemon.vue";
import { Component, Vue } from "vue-property-decorator";
import { Fragment } from "vue-fragment";

@Component({
	components: {
		ListPokemon,
		Fragment,
	},
})
export default class PokeListView extends Vue {}
</script>
