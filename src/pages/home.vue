<template>
  <div class="select-pokemon-page">
    <img src="./../assets/pokemon-logo.gif" alt="pokémon" />
    <h1>Home page</h1>
    <div class="select-pokemon-content" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["statePokemonsDataList", "statePokemonList"]),
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      );
      const json = await data.json();
      return json.results;
    },
  },
};
</script>

<style scoped>
.select-pokemon-page {
  text-align: center;
}

.select-pokemon-content {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
}
</style>