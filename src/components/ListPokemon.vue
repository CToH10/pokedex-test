<template>
	<section>
		<section class="navigation d-grid gap-2 d-md-block">
			<button v-if="previous" @click="previousList" class="btn btn-secondary">
				Previous 20
			</button>
			<button v-if="next" @click="nextList" class="btn btn-secondary">
				Next 20
			</button>
		</section>
		<ul>
			<PokeCard :pokemon="pokemon" v-for="pokemon in list" :key="pokemon.url" />
		</ul>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/service/axios";
import PokeCard from "./PokeCard.vue";
import { iPokeList } from "@/types";
import Vuex from "vuex";

const listing = new Vuex.Store({
	state: {
		currentList: [] as iPokeList,
	},
	mutations: {
		change(state, list) {
			state.currentList = list;
		},
	},
});

export default defineComponent({
	components: {
		PokeCard,
	},
	store: listing,
	data() {
		return {
			list: listing.state.currentList,
			next: "",
			previous: "",
		};
	},
	methods: {
		async getData(url = "/pokemon") {
			const pokeList = (await api.get(url)).data;
			return pokeList;
		},
		async nextList() {
			this.getData(this.next).then((data) => {
				listing.commit("change", data.results);
				this.list = listing.state.currentList;
				this.next = data.next;
				this.previous = data.previous;
			});
		},
		async previousList() {
			this.getData(this.previous).then((data) => {
				listing.commit("change", data.results);
				this.list = listing.state.currentList;
				this.next = data.next;
				this.previous = data.previous;
			});
		},
	},
	created(): void {
		this.getData().then((data) => {
			listing.commit("change", data.results);
			this.list = listing.state.currentList;
			this.next = data.next;
			this.previous = data.previous;
		});
	},
});
</script>
