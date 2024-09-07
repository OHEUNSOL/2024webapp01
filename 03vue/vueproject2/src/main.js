import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";

createApp(App).use(store).use(router).mount("#app");

// **createApp**은 Vue 라이브러리에서 특정 함수만 가져오므로 중괄호로 감쌉니다.
// 반면 App, store, **router**는 각각의 파일에서 기본 내보내기된 모듈이기 때문에 중괄호 없이 가져옵니다.
// 이 코드에서는 Vue 애플리케이션을 생성하고, 상태 관리(Vuex)와 라우팅(Vue Router)을 추가한 후, #app 요소에 마운트하여 렌더링하는 전체 흐름을 보여줍니다.
