import HomeComponent from './components/HomeComponent.vue';
import SignupComponent from './components/SignupComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import DoctorsComponent from './components/DoctorsComponent.vue';
import DoctorComponent from './components/DoctorComponent.vue';
import ReceptionsComponent from './components/ReceptionsComponent.vue';
import ReceptionComponent from './components/ReceptionComponent.vue';
import InfoComponent from './components/InfoComponent.vue';
import DashboardComponent from './components/DashboardComponent.vue';

// import Component404 from './components/Component404.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'signup',
        path: '/signup',
        component: SignupComponent
    },
    {
        name: 'signin',
        path: '/signin',
        component: LoginComponent
    },
    {
        name: 'profile',
        path: '/profile',
        component: ProfileComponent
    },
    // {
    //     name: '/404',
    //     path: '/404',
    //     component: Component404
    // },
    {
        name: '/profile/doctors',
        path: '/profile/doctors',
        component: DoctorsComponent
    },
    {
        name: '/profile/doctor',
        path: '/profile/doctor?id=:id',
        props: { default: true},
        component: DoctorComponent
    },
    {
        name: '/receptions',
        path: '/receptions',
        component: ReceptionsComponent
    },
    {
        name: '/reception',
        path: '/reception?id=:id',
        component: ReceptionComponent
    },
    // {
    //     name: '/reception/edit',
    //     path: '/reception?id=:id',
    //     // redirect: to => {'/receptions' },
    // },
    {
        name: '/reception/delete',
        path: '/reception?id=:id'
    },
    {
        name: '/info',
        path: '/info',
        component: InfoComponent
    },
    {
        name: '/dashboard',
        path: '/dashboard',
        component: DashboardComponent
    },
];