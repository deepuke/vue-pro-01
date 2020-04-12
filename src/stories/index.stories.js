import Vue from 'vue';
// Import your global components.
import HelloWorld from '../components/HelloWorld.vue';

export default { title: 'Hello World' };

export const HelloWorldComponent = () => ({
    components: { HelloWorld },
    data() {
        return {
            msg: "This is a test message"
        }
    },
    template: '<hello-world :msg="msg"></hello-world>'
});