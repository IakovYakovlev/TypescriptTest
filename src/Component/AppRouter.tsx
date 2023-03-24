import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { 
	privateRoutes as routes,
	publicRoutes
} from '../router';

const AppRouter = () => {
	const {isAuth} = useContext(AuthContext);
	return (
		isAuth
		?
		<Routes>
			{routes.map(route => 
				<Route key={route.path} path={route.path} element={<route.component />} />
			)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route => 
				<Route key={route.path} path={route.path} element={<route.component />} />
			)}
		</Routes>
	);
};

export default AppRouter;