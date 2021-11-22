import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statePokemonsDataList: [],
    statePokemonPokemonList: []
  },
  actions: {
    setPokemonsData(context, payload) {
      context.commit("setPokemonsData", payload);
    },
    setPokemonList(context, payload) {
      context.commit("setPokemonList", payload);
    },
    addPokemon(context, payload) {
      context.commit("addPokemon", payload);
    },
    deletePokemon(context, payload) {
      context.commit("deletePokemon", payload);
    },
    erasePokemonList(context) {
      context.commit("erasePokemonList");
    }
  },
  mutations: {
    setPokemonsData(state, list) {
      state.statePokemonsDataList = list;
    },
    setPokemonList(state, list) {
      state.statePokemonList = list;
    },
    addPokemon(state, name) {
      state.statePokemonList.push(name);
    },
    deletePokemon(state, item) {
      state.statePokemonList.splice(item, 1);
    },
    erasePokemonList(state) {
      state.statePokemonList = [];
    }
  }
});