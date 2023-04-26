<template>
	<section class="container">
		<button
			type="button"
			class="btn btn-primary position-fixed"
			data-bs-toggle="modal"
			data-bs-target="#pokeModal"
			style="right: clamp(10px, 5vw, 50px)"
			v-if="empty"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-eye"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
				/>
				<path
					d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
				/>
			</svg>
		</button>
		<PokeModal />
		<section
			class="d-grid gap-2 d-md-flex justify-content-md-center w-50 mx-auto"
		>
			<button v-if="next" @click="nextList" class="btn btn-secondary">
				Next 20
			</button>
			<button v-if="previous" @click="previousList" class="btn btn-secondary">
				Previous 20
			</button>
		</section>
		<ul
			class="list-unstyled d-flex flex-row justify-content-center align-items-center flex-wrap"
		>
			<PokeCard :pokemon="pokemon" v-for="pokemon in list" :key="pokemon.url" />
		</ul>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api } from "@/service/axios";
import PokeCard from "./PokeCard.vue";
import PokeModal from "./PokeModal.vue";
import { iPokeList } from "@/types";
import Vuex from "vuex";
import store from "@/store";

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
		PokeModal,
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
	computed: {
		empty() {
			return store.state.pokeTeam.length;
		},
	},
});
</script>
