<template>
	<ul>
		<li
			v-for="({ name, url }, index) in team"
			:key="index"
			class="w-75 d-flex flex-column justify-content-center"
		>
			<img :src="url" :alt="name" />
			<p class="text-light text-capitalize align-self-center">{{ name }}</p>
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
