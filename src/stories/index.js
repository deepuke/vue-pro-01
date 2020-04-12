import Vue from 'vue';
// Import your global components.
import HelloWorld from '../src/components/HelloWorld.vue';

export default { title: 'Hello World' };

export const asAComponent = () => ({
    components: { HelloWorld },
    template: '<hello-world :msg="hi">rounded</hello-world>'
});