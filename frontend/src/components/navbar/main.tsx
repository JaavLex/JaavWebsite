import NavButton from './navbutton';
import type { NavBarProps } from '../../types/navbartypes';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavTitle from './navtitle';

export default function NavBar({ Buttons }: NavBarProps) {
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<nav className="flex flex-row width-full align-items-center bg-[var(--bg-elev)] px-4 text-white gap-8 fixed top-0 left-0 right-0 z-50">
			{/*responsive navbar with buttons on the right */}
			<NavTitle />
			{!isMd ? (
				<div className="ml-auto">
					<button className="hover:bg-gray-700 px-4 py-2 h-12">
						<RxHamburgerMenu />
					</button>
				</div>
			) : (
				<div className="flex flex-row space-between gap-4">
					{Buttons.map(button => (
						<NavButton name={button.name} link={button.link} />
					))}
				</div>
			)}
		</nav>
	);
}
