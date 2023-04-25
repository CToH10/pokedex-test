<template>
  <ul>
    <PokeCard
      :pokemon="pokemon"
      v-for="(pokemon, index) in list"
      :key="index"
    />
  </ul>
</template>

<script lang="ts">
import { api } from "@/service/axios";
import PokeCard from "./PokeCard.vue";

interface iPokemon {
  name: string;
  url: string;
}

export default {
  components: {
    PokeCard,
  },
  data() {
    return {
      list: async (): Promise<iPokemon> =>
        (await api.get("/pokemon")).data.results,
    };
  },
  methods: {
    async getData() {
      this.list = (await api.get("/pokemon")).data.results;
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
