import { Route, Routes } from 'react-router-dom';
import { 
	privateRoutes as routes,
	publicRoutes
} from '../router';

const AppRouter = () => {
	const isAuth = false;
	return (
		isAuth
		?
		<Routes>
			{routes.map(route => 
				<Route path={route.path} element={<route.component />} />
			)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route => 
				<Route path={route.path} element={<route.component />} />
			)}
		</Routes>
	);
};

export default AppRouter;