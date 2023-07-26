import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import GameView from '../views/GameView.vue';

const routes = [
	{
		path: '/',
		alias: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/play',
		name: 'play',
		component: GameView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// always scroll to top
		return { top: 0 };
	},
});

export default router;
