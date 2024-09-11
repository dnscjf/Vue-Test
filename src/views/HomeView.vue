<template>
  <div>
    <h1>Home Page</h1>
    <p>첫 페이지입니다.</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} : {{ user.name }} : {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUser } from "@/api";
export default {
  name: "HomeView",
  data() {
    return {
      users: [], // API 에서 사용자 데이터 불러옴
    };
  },
  async mounted() {
    try {
      this.users = await getUser();
      console.log(this.users);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
