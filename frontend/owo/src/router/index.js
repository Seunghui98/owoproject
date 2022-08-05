import { createRouter, createWebHistory } from 'vue-router';
import mainPageView from '../views/MainPage/mainPageView.vue';
import MyPageView from '../views/MyPage/MyPageView.vue';
import MyPageMainView from '../views/MyPage/MyPageMainView.vue';
import MyPageAnalysView from '../views/MyPage/MyPageAnalysView.vue';
import MyPageUpdateView from '../views/MyPage/MyPageUpdateView.vue';
import MyPageScheduleView from '../views/MyPage/MyPageScheduleView.vue';
import MyPageSlideView from '../views/MyPage/MyPageSlideView.vue';
import CompetitionView from '../views/Room/CompetitionView.vue';
import FriendView from '../views/Room/FriendView.vue';
import YoutubeView from '../views/Room/YoutubeView.vue';
import login from '../views/accounts/loginView.vue';
import register from '../views/accounts/registerView.vue';
import emailVerify from '../views/accounts/emailVerify.vue';
import TestView from '../views/Room/TestView.vue';
import OauthRedirect from '../views/Room/RedirectView.vue';

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainPageView,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/emailVerify',
    name: 'emailVerify',
    component: emailVerify,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPageView,
    children: [
      {
        path: 'main',
        // name: 'MyPageMainView',
        component: MyPageMainView,
      },
      {
        path: 'analys',
        // name: 'MyPageAnalysView',
        component: MyPageAnalysView,
      },
      {
        path: 'update',
        // name: 'MyPageUpdateView',
        component: MyPageUpdateView,
      },
      {
        path: 'schedule',
        // name: 'MyPageScheduleView',
        component: MyPageScheduleView,
      },
    ],
  },
  {
    path: '/slide',
    name: 'MyPageSlideView',
    component: MyPageSlideView,
  },
  {
    path: '/room/competition',
    name: 'competition',
    component: CompetitionView,
  },
  {
    path: '/room/friend',
    name: 'friend',
    component: FriendView,
  },
  {
    path: '/room/youtube',
    name: 'Youtube',
    component: YoutubeView,
  },
  {
    path: '/social',
    name: 'TestPage',
    component: TestView,
  },
  {
    path: '/oauth/redirect',
    name: 'OauthRedrect',
    component: OauthRedirect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
