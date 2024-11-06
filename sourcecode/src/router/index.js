import { createRouter, createWebHashHistory } from 'vue-router'; // 引入 createWebHashHistory
import ProxyPage from '../views/ProxyPage.vue';
import PayPage from '../views/PayPage.vue';
import AboutPage from '../views/AboutPage.vue';
import SolutionPage from '../views/SolutionPage.vue';
import CasePage from '../views/CasePage.vue';
import HomePage from '../views/HomePage.vue';
import TestPage from '../views/TestPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/solution',
    name: 'SolutionPage',
    component: SolutionPage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/case',
    name: 'CasePage',
    component: CasePage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/proxy',
    name: 'ProxyPage',
    component: ProxyPage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/pay',
    name: 'PayPage',
    component: PayPage,
    meta: { title: 'LookOutward' } // 设置标题
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage,
    meta: { title: 'LookOutward' } // 设置标题
  },


 
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 createWebHashHistory
  routes
});

export default router;
