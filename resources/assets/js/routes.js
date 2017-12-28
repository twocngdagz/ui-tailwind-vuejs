import VueRouter from 'vue-router';

let routes = [
    {
        path: '/todo',
        component: require('./components/todo.vue')
    },
    {
        path: '/navbar',
        component: require('./components/navbar.vue')
    }
];

export default new VueRouter({
    routes
});
