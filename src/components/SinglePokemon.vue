<template>
  <section>
    <section class="basicInfo">
      <figure>
        <img :src="pokemonImage" :alt="pokemonName" />
        <figcaption>{{ pokemonName }}</figcaption>
      </figure>
      <ul class="types">
        <PokemonType v-for="position in types" :key="position.length">
          {{ position }}
        </PokemonType>
      </ul>
    </section>
    <section class="info">
      <h2 class="name">{{ pokemonName }}</h2>
    </section>
    <ul class="abilities">
      <PokemonAbility />
    </ul>
  </section>
</template>

<script lang="ts">
import PokemonAbility from "./PokemonAbility.vue";
import PokemonType from "./PokemonType.vue";
import { api } from "@/service/axios";

interface iGetData {
  list: Array<object>;
}

export default {
  components: {
    PokemonAbility,
    PokemonType,
  },
  computed: {},
  data() {
    return {
      pokemonName: "",
      pokemonImage: "",
      types: "",
      selected: this.$route.params.pokeName,
    };
  },
  methods: {
    async getData() {
      const url: string = "/pokemon/" + this.selected;
      const info = (await api.get(url)).data;
      this.pokemonName = info.species.name;
      this.pokemonImage = info.sprites.front_default;
      this.types = info.types;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
figcaption {
  display: none;
}

.types {
  display: flex;
  gap: clamp(1vw, 10px, 20px);

  width: clamp(10vw, 75px, 120px);
  color: teal;
}

.info {
  color: orangered;
}
.info h2 {
  text-transform: uppercase;
}
</style>
