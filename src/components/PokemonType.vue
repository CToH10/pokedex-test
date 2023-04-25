<template>
  <p>{{ this.name }}</p>
</template>

<script lang="ts" setup>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
p {
  color: v-bind("style.color");
}
</style>
