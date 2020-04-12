import { configure } from '@storybook/vue';
import Vue from 'vue';

// Import Vue plugins
// import Vuex from 'vuex';

// Import your global components.
import HelloWorld from '../src/components/HelloWorld.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register global components.
Vue.component('hello-world', HelloWorld);

configure(require.context('../src', true, /\.stories\.js$/), module);