import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import "./assets/style.css"
import "./assets/font.css"

// ⬇️ add these
import Vue3Toastify, {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App);
app.use(router);

// ⬇️ global config (RTL + top-right)
app.use(Vue3Toastify, {
    autoClose: 3000,
    rtl: true,
    position: toast.POSITION.TOP_RIGHT,
    toastClassName: "toastify-rtl-font",
    bodyClassName: "toastify-rtl-font"
});

app.mount('#app');
