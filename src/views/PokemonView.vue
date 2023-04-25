<template>
	<SinglePokemon />
</template>

<script lang="ts">
import SinglePokemon from "@/components/SinglePokemon.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
		SinglePokemon,
	},
})
export default class PokemonView extends Vue {}
</script>
