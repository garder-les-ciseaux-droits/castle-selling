import { createRouter, createWebHashHistory } from "vue-router";
import Catalog from '/src/components/Catalog.vue'
import MainLanding from '/src/components/MainLanding.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/main', component: MainLanding, alias: '/'},
        { path: '/catalog', component: Catalog}

    ]
})