<template>
  <main>
    <ListPokemon />

    <PokeTeam />
  </main>
</template>

<script lang="ts">
import ListPokemon from "@/components/ListPokemon.vue";
import PokeTeam from "@/components/PokeTeam.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    ListPokemon,
    PokeTeam,
  },
})
export default class PokeListView extends Vue {}
</script>
