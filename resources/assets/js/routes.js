import VueRouter from 'vue-router';

let routes = [
    {
        path: '/todo',
        component: require('./components/todo.vue')
    },
    {
        path: '/navbar',
        component: require('./components/navbar.vue')
    },
    {
        path: '/sidebar',
        component: require('./components/sidebar.vue')
    },
    {
        path: '/select',
        component: require('./components/select.vue'),
        props: {
            options: ["option 4","option 5","option 6"]
        }
    }
];

export default new VueRouter({
    routes
});
