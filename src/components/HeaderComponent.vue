<template>
  <!-- SCSS css 방식 -->
  <div class="box-wrap">
    <!-- 인라인 이벤트 방식 -->
    <h1 class="box" @click="$emit('handleClick')">
      {{ name }} 사용자님 {{ age }} 등록 {{ user.country }}
    </h1>
    <!-- 동적 인라인 css  -->
    <button
      :style="{ color: textColor, fontSize: fontSize + 'px' }"
      @click="handleBtClick"
    >
      추천합니다.
    </button>
    <!-- 배열 형태의 인라인 css -->
    <button :style="[btStyle, btFontSize]" @click="handleBtClick">
      추천합니다.
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  //   유효성 검사까지 포함
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    user: {
      type: Object,
      default: () => {
        return {
          country: "",
          count: 0,
        };
      },
    },
  },
  methods: {
    // 이벤트 핸들러 방식
    handleBtClick() {
      this.$emit("handleClickArg", 100, "안녕");
    },
  },
  data() {
    return {
      textColor: "blue",
      fontSize: 24,
      // 배열 형태의 css 데이터
      btStyle: { color: "red" },
      btFontSize: { fontSize: "20px" },
    };
  },
};
</script>

<style scoped>
.box {
  background: red;
}
</style>

<!-- SCSS -->
<style lang="scss" scoped>
.box-wrap {
  border: 5px solid red;
  padding: 5px;
}
</style>
