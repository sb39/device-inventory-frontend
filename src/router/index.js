import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DeviceListing from '../views/DeviceListing.vue';
import CreateDevice from '../views/CreateDevice.vue';
import DeviceDetails from '../views/DeviceDetails.vue';
import Authentication from '../views/Authentication.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/devices',
    name: 'DeviceListing',
    component: DeviceListing,
  },
  {
    path: '/devices/create',
    name: 'CreateDevice',
    component: CreateDevice,
  },
  {
    path: '/device/details',
    name: 'DeviceDetails',
    component: DeviceDetails,
  },
  {
    path: '/login',
    name: 'login',
    component: Authentication,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
