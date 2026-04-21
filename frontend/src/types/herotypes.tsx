import type { GButtonProps } from './globaltypes';

interface HeroProps {
	title: string;
	subtitle: string;
	fakepath?: string;
	fakecomment?: string;
	fakeconst?: string;
	picture?: string;
	buttons?: GButtonProps[];
	openToOpportunities?: boolean;
}

interface HeroPictureProps {
	src: string;
	alt: string;
}

export type { HeroProps, HeroPictureProps };
