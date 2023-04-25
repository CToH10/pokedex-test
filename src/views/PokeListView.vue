<template>
	<ListPokemon />
</template>

<script lang="ts">
import ListPokemon from "@/components/ListPokemon.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
		ListPokemon,
	},
})
export default class PokeListView extends Vue {}
</script>
