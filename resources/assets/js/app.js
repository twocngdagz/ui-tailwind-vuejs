
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue');
import VueRouter from 'vue-router'
import App from './components/App'
import router from './routes'
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css';


const all_listen_types = {hover: true, click: true, focus: true};
function targets(el, binding, vnode, listen_types, fn) {
    const vm = vnode.context.$root;

    if (!vm) {
        console.warn('__vue__ is not available on element', el);
        return;
    }

    const targets = Object.keys(binding.modifiers || {})
        .filter(t => !all_listen_types[t]);

    if (binding.value) {
        targets.push(binding.value);
    }

    const listener = () => {
        fn({targets, vm});
    };

    Object.keys(all_listen_types).forEach(type => {
        if (listen_types[type] || binding.modifiers[type]) {
            el.addEventListener(type, listener);
        }
    });
}


const listen_types = {click: true};
Vue.directive('toggle', {
    bind(el, binding, vnode) {
        targets(el, binding, vnode, listen_types, ({targets, vm}) => {
            targets.forEach(target => {
                vm.$root.$emit('collapse::toggle', target, el);
            });
        });
    }
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter)
Vue.use(iView, { locale });

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
