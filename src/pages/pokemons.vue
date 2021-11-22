<template>
  <div>
    <h1 class="overview-pokemon_title">Pokemon</h1>
    <router-link class="nes-btn" to="/">Go back</router-link>
    <div class="overview-pokemon" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["statePokemonList"]),
  },
};
</script>

<style scoped>
.overwiev-pokemon {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.overwiev-pokemon_title {
  margin-top: 10px;
  text-align: center;
}
</style>