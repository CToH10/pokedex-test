<template>
	<ul>
		<li v-for="({ name, url }, index) in team" :key="index">
			<img :src="url" :alt="name" />
			<p>{{ name }}</p>
		</li>
	</ul>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	data() {
		return {
			team: store.state.pokeTeam,
		};
	},
});
</script>
