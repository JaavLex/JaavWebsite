import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavButton from './navbutton';
import LocaleToggle from './localetoggle';
import type { NavBarProps } from '../../types/navbartypes';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import NavTitle from './navtitle';

export default function NavBar({ Buttons }: NavBarProps) {
	const { t } = useTranslation();
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="flex flex-col w-full bg-(--bg-elev) text-(--fg) fixed top-0 left-0 right-0 z-50 border-b border-(--rule)">
			<div className="flex flex-row w-full items-center px-4 gap-8">
				<NavTitle />
				{!isMd ? (
					<div className="ml-auto flex items-center gap-3">
						<LocaleToggle />
						<button
							className="hover:bg-(--fg-faint) px-4 py-2 h-12"
							onClick={() => setMenuOpen(open => !open)}
							aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
							aria-expanded={menuOpen}
						>
							{menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
						</button>
					</div>
				) : (
					<div className="ml-auto flex flex-row items-center gap-4">
						<div className="flex flex-row">
							{Buttons.map(button => (
								<NavButton name={button.name} link={button.link} />
							))}
						</div>
						<LocaleToggle />
					</div>
				)}
			</div>
			{menuOpen && !isMd && (
				<div className="flex flex-col border-t border-(--rule)">
					{Buttons.map(button => (
						<NavButton
							key={button.link}
							name={button.name}
							link={button.link}
							onClick={() => setMenuOpen(false)}
						/>
					))}
				</div>
			)}
		</nav>
	);
}
