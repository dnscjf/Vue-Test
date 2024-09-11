import { createStore } from "vuex";

// 전역 저장소 생성
const store = createStore({
  // 전역 상태 데이터
  state: {
    count: 0, // 초기값
  },

  // 데이터 읽기
  getters: {
    getCount(state) {
      return state.count;
    },
  },

  // 데이터 변경
  mutations: {
    add(state, value) {
      state.count = state.count + value;
    },
    minus(state, value) {
      state.count = state.count - value;
    },
  },

  // 비동기 처리
  actions: {},
});

export default store;
