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
import { defineComponent } from "vue";
import { api } from "@/service/axios";
import PokeCard from "./PokeCard.vue";
import { iPokeList } from "@/types";

export default defineComponent({
  components: {
    PokeCard,
  },
  data() {
    return {
      list: [] as iPokeList,
    };
  },
  methods: {
    async getData() {
      const pokeList = (await api.get("/pokemon")).data.results;

      return pokeList;
    },
  },
  created(): void {
    this.getData().then((list: iPokeList) => {
      this.list = list;
    });
  },
});
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
