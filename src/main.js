import { createApp } from "vue";
import App from "./App.vue";
// import 를 이용한 css 불러들이기
import "./styles/global.css";
// 라우터 사용
import router from "./router/index.js";
// vuex 사용
import store from "./stores/index.js";
// 코드 변경
// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router); // 라우터 사용
app.use(store); // vuex 사용
app.mount("#app");
