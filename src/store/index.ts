import { iPokeList } from "@/types";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pokeTeam: [] as iPokeList,
	},
	getters: {},
	mutations: {
		addTeam(state, pokemon) {
			if (state.pokeTeam.length === 6) {
				return Error("Not possible to have more than 6");
			} else if (state.pokeTeam.some((team) => team.name === pokemon.name)) {
				return Error("Already on the team");
			}

			state.pokeTeam.push(pokemon);
		},
		removeTeam(state, name) {
			const index = state.pokeTeam.findIndex((team) => {
				return team.name === name;
			});

			if (index === -1) {
				return Error("Not on team");
			}

			state.pokeTeam.splice(index, 1);
		},
	},
	actions: {},
	modules: {},
});
