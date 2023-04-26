<template>
	<li>
		<figure>
			<img :src="image" :alt="rawObj.name" />
			<figcaption>{{ rawObj.name }}</figcaption>
		</figure>
		<h3>{{ rawObj.name }}</h3>
		<router-link :to="link"> Veja mais </router-link>
	</li>
</template>

<script lang="ts">
import { api } from "@/service/axios";

export default {
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
	},
};
</script>

<style>
figcaption {
	display: none;
}
</style>
