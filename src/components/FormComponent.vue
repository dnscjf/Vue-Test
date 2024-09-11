<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name : </label>
      <input type="text" id="name" v-model="name" />
      <p>입력된 Name : {{ name }} 입니다.</p>
    </div>
    <div>
      <label>나이 : </label>
      <input type="number" v-model="age" @input="handleAge" />
      <p>입력중 메세지 : {{ ageMessage }}</p>
    </div>
    <div>
      <label> 동의여부 : </label>
      <input type="checkbox" v-model="checked" />
      <p>체크박스 여부 : {{ checked ? "동의" : "미동의" }}</p>
    </div>
    <div>
      <label> 옵션 1 : <input type="radio" value="a" v-model="picked" /> </label>
      <label> 옵션 2 : <input type="radio" value="b" v-model="picked" /> </label>
      <p>선택된 옵션 : {{ picked }}</p>
    </div>
    <div>
      <label>국가 선택 : </label>
      <select v-model="country">
        <option disabled value="">하나의 국가를 선택하시오.</option>
        <option>한국</option>
        <option>미국</option>
        <option>일본</option>
      </select>
      <p>선택된 국가 : {{ country }}</p>
    </div>
    <div>
      <label>기타의견:</label>
      <textarea v-model="message"></textarea>
      <p>입력된 기타 의견 : {{ message }}</p>
    </div>

    <div>
      <label>첨부파일 : </label>
      <!-- 파일은 change 이벤트 입니다. -->
      <input type="file" @change="handleFile" />
      <p>첨부된 파일 : {{ fileName }}</p>
    </div>

    <div>
      <button type="submit">입력</button>
      <p>입력된 데이터 : {{ sendData }}</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "App",
  components: {},
  // 이벤트 연결될 함수
  methods: {
    handleSubmit() {
      console.log(this.name, this.checked, this.picked, this.country, this.message);
      this.sendData = `이름은 ${this.name} 이고 국가는 ${this.country} 입니다.`;
    },
    handleAge() {
      console.log(this.age);
      if (this.age < 18) {
        this.ageMessage = "성인이 아닙니다.";
      } else {
        this.ageMessage = "성인이시네요.";
      }
    },

    handleFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    },
  },
  // 출력할 데이터
  data() {
    return {
      name: "",
      age: 0,
      ageMessage: "",
      checked: false,
      picked: "",
      country: "",
      message: "",
      sendData: "",
      fileName: "",
    };
  },
};
</script>

<style src="@/styles/style.css"></style>
<style>
.red-bg {
  background-color: red;
}
</style>
