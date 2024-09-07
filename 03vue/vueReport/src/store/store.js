import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hyejuzeonza",
        password: "123",
        username: "윤혜주",
        image: "https://picsum.photos/100",
      },
      {
        userid: "avokido",
        password: "123",
        username: "오은솔",
        image: "https://picsum.photos/100",
      },
      {
        userid: "10ganzi",
        password: "123",
        username: "이예린",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
