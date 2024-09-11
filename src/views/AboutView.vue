<template>
  <div>
    <h1>About Page</h1>
    <p>소개 페이지입니다.</p>
    <p>Vuex state의 counter : {{ getCount }}</p>
    <p>
      <button v-on:click="add(100)">증가</button>
      <button @click="minus(8)">감소</button>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AboutView",
  // 데이터를 계산해서 결과를 갱신함.
  computed: {
    ...mapGetters(["getCount"]),
    ...mapMutations(["add", "minus"]),
  },
};
</script>

<style></style>
