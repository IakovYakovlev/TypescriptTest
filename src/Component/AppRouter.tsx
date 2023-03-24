import { Route, Routes } from 'react-router-dom';
import { routes } from '../router';

const AppRouter = () => (
	<Routes>
		{routes.map(route => 
			<Route path={route.path} element={<route.component />} />
		)}
	</Routes>
);

export default AppRouter;