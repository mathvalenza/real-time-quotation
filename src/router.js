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
  routes: [
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
    {
      path: '*',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = firebase.auth().currentUser || sessionStorage.getItem('userEmail');
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

  if (requiresAuth && !isLogged) {
    next('login');
    sessionStorage.removeItem('userEmail');
  } else {
    next();
  }
});

export default router;
