<template>
  <li>
    <p>{{ name }}</p>
  </li>
</template>

<script lang="ts">
export default {
	props: {
		position: Object,
	},
	data() {
		return {
			style: {
				color: "red",
			},
			name: String,
		};
	},
	created() {
		this.name = JSON.parse(JSON.stringify(this.position)).type.name;
	},
};
</script>

<style>
p {
	color: v-bind("style.color");
}
</style>
