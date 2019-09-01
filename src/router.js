import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '*',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/sign_up',
    name: 'signUp',
    component: SignUp,
  },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
