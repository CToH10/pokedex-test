<template>
  <li>
    <p>{{ pokeType.type.name }}</p>
  </li>
</template>

<script lang="ts">
function iPokeType() {
  return {
    type: {
      name: String,
      url: String,
    },
    slot: Number,
  };
}

export default {
  props: {
    pokeType: {
      type: iPokeType,
      required: true,
    },
  },
  data() {
    return {
      style: {
        color: "red",
      },
      name: String,
    };
  },
};
</script>

<style>
p {
  color: v-bind("style.color");
  text-transform: capitalize;
}
</style>
