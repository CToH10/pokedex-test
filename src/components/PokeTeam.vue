<template>
	<ul>
		<li
			v-for="({ name, url }, index) in team"
			:key="index"
			class="w-75 d-flex flex-column justify-content-center"
		>
			<img :src="url" :alt="name" />
			<p class="text-light text-capitalize align-self-center">{{ name }}</p>
			<button class="btn btn-danger btn-sm w-100" @click="removeState(name)">
				Remove
			</button>
		</li>

		<h3 v-if="!team.length" class="text-light align-self-center">
			No pokémon selected
		</h3>
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
	methods: {
		removeState(name: string) {
			store.commit("removeTeam", name);
		},
	},
});
</script>
