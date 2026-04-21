interface GButtonProps {
	text: string;
	type?: 'primary' | 'secondary';
	onClick: () => void;
}

interface PageSectionProps {
	title: string;
	direction: 'col' | 'row';
	id: string;
	children?: React.ReactNode;
}

export type { GButtonProps, PageSectionProps };
