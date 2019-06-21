import Vue from 'vue'
import Router from 'vue-router'
import PersonalInfo from './pages/PersonalInfo.vue'
import Profile from './pages/Profile.vue'
import Expertise from './pages/Expertise.vue'
import Interview from './pages/Interview.vue'
import Success from './pages/Success.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'Personal',
        path: '/personal',
        component: PersonalInfo
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile
    },
    {
        name: 'Expertise',
        path: '/expertise',
        component: Expertise
    },
    {
        name: 'Interview',
        path: '/interview',
        component: Interview
    },
    {
        name: 'Success',
        path: '/success',
        component: Success
    }
    ]

})