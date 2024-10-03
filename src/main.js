import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseCard', BaseCard);
app.component('BaseSpinner', BaseSpinner);
app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);

app.mount('#app');
