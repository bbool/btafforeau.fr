import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';
import CourseView from "@/views/CourseView";
import PortfolioView from "@/views/PortfolioView";
import SkillsView from "@/views/SkillsView";
import ContactView from "@/views/ContactView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
