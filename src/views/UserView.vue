<template>
  <div>
    <h1>User Page</h1>
    <!-- 동적 데이터 출력 -->
    <p>{{ $route.params.id }} 사용자 페이지입니다.</p>
  </div>
</template>

<script>
export default {
  name: "UserView",
};
</script>

<style></style>
