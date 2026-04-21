interface GButtonProps {
	text: string;
	type?: 'primary' | 'secondary';
	onClick: () => void;
}

interface PageSectionProps {
	title: string;
	children?: React.ReactNode;
}

export type { GButtonProps, PageSectionProps };
