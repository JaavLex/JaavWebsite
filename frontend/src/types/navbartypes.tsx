// Set navbar types here, so that they can be used in multiple files without circular imports
interface NavBarProps {
	Buttons: NavButtonProps[];
}

interface NavButtonProps {
	name: string;
	link: string;
	onClick?: () => void;
}

export type { NavBarProps, NavButtonProps };
