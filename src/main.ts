/*
 * @Author: NanNan
 * @Date: 2025-09-12 22:31:38
 * @LastEditTime: 2025-11-19 16:58:46
 * @Description:
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app');
