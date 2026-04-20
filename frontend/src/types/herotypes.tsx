interface HeroProps {
	title: string;
	subtitle: string;
	fakepath?: string;
	fakecomment?: string;
	fakeconst?: string;
	picture?: string;
	buttons?: {
		name: string;
		link: string;
		onClick?: () => void;
	}[];
}

export type { HeroProps };
