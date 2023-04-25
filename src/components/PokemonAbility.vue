<template>
  <li class="ability">
    <h4 class="title">
      {{ abilityName }}
    </h4>
    <p class="description">
      {{ power }}
    </p>
  </li>
</template>

<script lang="ts">
export default {
	data() {
		return {
			abilityName: "Nome",
			power: "text",
		};
	},
};
</script>

<style>
li {
	list-style: none;
}
</style>
