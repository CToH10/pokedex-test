<template>
	<section>
		<section class="basicInfo">
			<figure>
				<img :src="pokemonImage" :alt="pokemonName" />
				<figcaption>{{ pokemonName }}</figcaption>
			</figure>
			<button @click="back">Go Back</button>
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

<style>
figcaption {
	display: none;
}

.types {
	display: flex;
	gap: clamp(1vw, 10px, 20px);

	width: clamp(10vw, 75px, 120px);
	color: teal;
}

.info {
	color: orangered;
}
.info h2 {
	text-transform: capitalize;
}
</style>
