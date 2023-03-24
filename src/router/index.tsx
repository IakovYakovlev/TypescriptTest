import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Login from '../pages/Login';

export const privateRoutes = [
	{path: '/', component: About},
	{path: '/about', component: About},
	{path: '/posts', component: Posts},
	{path: '/posts/:id', component: PostIdPage},
	{path: '*', component: Error}
]

export const publicRoutes = [
	{path: '/', component: Login},
	{path: '/login', component: Login},
	{path: '*', component: Login}
]