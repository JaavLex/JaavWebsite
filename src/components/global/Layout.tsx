import { Outlet } from 'react-router-dom';
import Title from './Title';

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Title />
			<Outlet />
		</div>
	);
}
