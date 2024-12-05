import { Outlet } from 'react-router-dom';
import Title from './Title';
import Navbar from './Navbar';

export default function Layout() {
	return (
		<div className="w-full">
			<Navbar />
			<div className="flex flex-col min-h-screen">
				<Title />
				<Outlet />
			</div>
		</div>
	);
}
