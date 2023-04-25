<template>
  <section>
    <section class="basicInfo">
      <figure>
        <img src="{{pokemonImage}}" alt="{{pokemonName}}" />
        <figcaption>{{ pokemonName }}</figcaption>
      </figure>
      <section class="types">
        <!-- <PokemonType v-for="type.name in types" /> -->
      </section>
    </section>
    <section class="info">
      <h2 class="name">{{ pokemonName }}</h2>
      <p class="desc">{{ pokemonDesc }}</p>
    </section>
    <ul class="abilities">
      <PokemonAbility />
    </ul>
  </section>
</template>

<script lang="ts">
import PokemonAbility from "./PokemonAbility.vue";
import PokemonType from "./PokemonType.vue";

export default {
  components: {
    PokemonAbility,
  },
  data() {
    return {
      pokemonName: "",
      pokemonDesc: "",
      pokemonImage: "",
    };
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
