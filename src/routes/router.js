import { createRouter, createWebHashHistory } from "vue-router"

import Main from './Main.vue'
import Notes from './Notes.vue'
import Goals from './Goals.vue'
import Settings from './Settings.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'Main', component: Main},
        {path: '/notes', name: 'Notes', component: Notes},
        {path: '/goals', name: 'Goals', component: Goals},
        {path: '/settings', name: 'Settings', component: Settings},
    ]
})

export default router;