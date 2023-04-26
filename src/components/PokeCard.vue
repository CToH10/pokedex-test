<template>
	<li>
		<figure>
			<img :src="image" :alt="rawObj.name" />
			<figcaption>{{ rawObj.name }}</figcaption>
		</figure>
		<h3>{{ rawObj.name }}</h3>
		<section class="buttons">
			<router-link :to="link">More info</router-link>
			<button
				class="addToTeam"
				@click="addState(rawObj.name, image)"
				v-if="!isOnTeam(rawObj.name)"
			>
				Add to team
			</button>
			<button @click="removeState(rawObj.name)" v-if="isOnTeam(rawObj.name)">
				Remove
			</button>
		</section>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/service/axios";
import store from "@/store";

export default defineComponent({
	props: {
		pokemon: Object,
	},
	data() {
		return {
			rawObj: Object,
			link: "/pokemon/",
			image: "",
		};
	},
	created() {
		this.rawObj = JSON.parse(JSON.stringify(this.pokemon));
		this.link += this.rawObj.name;
		this.getImage();
	},
	methods: {
		async getImage() {
			this.image = (await api.get(this.link)).data.sprites.front_default;
		},
		addState(name: string, image: string) {
			store.commit("addTeam", { name: name, url: image });
		},
		removeState(name: string) {
			store.commit("removeTeam", name);
		},
		isOnTeam(name: string) {
			return store.state.pokeTeam.some((team) => team.name === name);
		},
	},
});
</script>

<style>
figcaption {
	display: none;
}
</style>
