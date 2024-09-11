<template>
  <div>
    <!-- 라우터 링크 걸기 -->
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/user/1">사용자 1</router-link>
      |
      <router-link to="/user/2">사용자 2</router-link>
      |
      <router-link to="/user/3">사용자 3</router-link>
    </nav>
  </div>
  <!-- 라우터 내용 보여주기 -->
  <router-view></router-view>
</template>

<script></script>
<style></style>
