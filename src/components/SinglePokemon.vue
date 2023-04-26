<template>
	<section
		class="d-grid gap-1 justify-content-center align-items-center flex-column"
	>
		<section
			class="basicInfo d-grid gap-3 justify-content-center align-items-center flex-column"
		>
			<figure>
				<img :src="pokemonImage" :alt="pokemonName" />
				<figcaption class="d-none">{{ pokemonName }}</figcaption>
			</figure>
			<button @click="back" class="btn btn-secondary">Go Back</button>
			<ul
				class="types d-flex justify-content-center align-items-center flex-column p-0"
			>
				<PokemonType
					:pokeType="type"
					v-for="(type, index) in types"
					:key="index"
				/>
			</ul>
		</section>
		<section class="info">
			<h2 class="text-light text-capitalize font-weight-bold">
				{{ pokemonName }}
			</h2>
		</section>
		<section class="moves container">
			<h3 class="text-primary">Moves ({{ moves.length }})</h3>
			<ul class="abilities overflow-scroll" style="max-height: 250px">
				<PokemonAbility
					:move="move"
					v-for="({ move }, index) in moves"
					:key="index"
				/>
			</ul>
		</section>
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
