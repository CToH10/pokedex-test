<template>
	<li
		class="w-75 mw-75 d-flex flex-column justify-content-center align-items-center"
	>
		<figure>
			<img :src="image" :alt="rawObj.name" />
			<figcaption class="d-none">{{ rawObj.name }}</figcaption>
		</figure>
		<h3 class="text-capitalize text-light">{{ rawObj.name }}</h3>
		<section class="buttons d-grid gap-2 col-6 mx-auto h-50">
			<router-link
				class="text-decoration-none w-100 text-light link-light"
				:to="link"
				>More info</router-link
			>
			<button
				class="addToTeam btn btn-primary btn-sm w-100"
				@click="addState(rawObj.name, image)"
				v-if="!isOnTeam(rawObj.name)"
			>
				Add to team
			</button>
			<button
				class="btn btn-danger btn-sm w-100"
				@click="removeState(rawObj.name)"
				v-if="isOnTeam(rawObj.name)"
			>
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
