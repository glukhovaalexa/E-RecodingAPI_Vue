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
    {
        name: '/profile/doctors',
        path: '/profile/doctors?id=:id',
        component: DoctorsComponent,
    },
    {
        name: '/profile/doctor',
        path: '/profile/doctor?id=:id',
        props: { default: true},
        component: DoctorComponent
    },
    {
        name: '/receptions',
        path: '/receptions?id=:id',
        component: ReceptionsComponent,
    },
    {
        name: '/reception',
        path: '/reception?id=:id',
        component: ReceptionComponent
    },
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