<template>
	<section>
		<section class="basicInfo">
			<figure>
				<img :src="pokemonImage" :alt="pokemonName" />
				<figcaption class="d-none">{{ pokemonName }}</figcaption>
			</figure>
			<button @click="back" class="btn btn-secondary">Go Back</button>
			<ul v-for="(type, index) in types" :key="index" class="types">
				<PokemonType :pokeType="type" />
			</ul>
		</section>
		<section class="info">
			<h2 class="name">{{ pokemonName }}</h2>
		</section>
		<ul class="abilities" v-for="({ move }, index) in moves" :key="index">
			<PokemonAbility :move="move" />
		</ul>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/service/axios";
import PokemonAbility from "./PokemonAbility.vue";
import PokemonType from "./PokemonType.vue";

interface iData {
	types: [];
	pokemonName: string;
	pokemonImage: string;
	moves: [];
	selected: string;
}

export default defineComponent({
	components: {
		PokemonAbility,
		PokemonType,
	},
	data(): iData {
		return {
			types: [],
			pokemonName: "",
			pokemonImage: "",
			moves: [],
			selected: this.$route.params.pokeName,
		};
	},
	methods: {
		back() {
			history.back();
		},
		async getTypes() {
			const url: string = "/pokemon/" + this.selected;
			const info = (await api.get(url)).data;

			return info;
		},
	},
	created() {
		this.getTypes().then((item) => {
			this.types = item.types;
			this.pokemonName = item.species.name;
			this.pokemonImage = item.sprites.front_default;
			this.moves = item.moves;
		});
	},
});
</script>
