export interface StrapiMedia {
	id: number;
	documentId: string;
	url: string;
	name: string;
	mime: string;
	size: number;
	width?: number | null;
	height?: number | null;
	alternativeText?: string | null;
}

export interface StrapiHeroButton {
	id: number;
	label: string;
	href?: string | null;
	file?: StrapiMedia | null;
	variant: 'primary' | 'secondary';
}

export interface StrapiHero {
	documentId: string;
	fakepath?: string | null;
	fakecomment?: string | null;
	name: string;
	subtitle?: string | null;
	jobTitleLabel?: string | null;
	jobTitle?: string | null;
	openToOpportunities: boolean;
	opportunitiesText?: string | null;
	picture?: StrapiMedia | null;
	buttons?: StrapiHeroButton[];
	locale: string;
}

export interface StrapiHomePage {
	documentId: string;
	aboutTitle: string;
	aboutTraitsTitle?: string | null;
	stackTitle: string;
	stackIntro?: string | null;
	projectsTitle: string;
	experienceTitle: string;
	experienceIntro?: string | null;
	contactTitle: string;
	contactIntro?: string | null;
	footerText?: string | null;
	locale: string;
}

export interface StrapiTrait {
	documentId: string;
	name: string;
	description: string;
	order?: number | null;
	locale: string;
}

export interface StrapiAbout {
	documentId: string;
	intro: string;
	secondary?: string | null;
	traits?: StrapiTrait[];
	locale: string;
}

export interface StrapiStackCategory {
	documentId: string;
	category: string;
	techs?: string[] | null;
	order?: number | null;
	locale: string;
}

export interface StrapiProjectLink {
	id: number;
	name: string;
	href: string;
}

export interface StrapiProject {
	documentId: string;
	name: string;
	summary?: string | null;
	status: 'done' | 'ongoing';
	description?: string | null;
	highlights?: string[] | null;
	links?: StrapiProjectLink[];
	techs?: string[] | null;
	order?: number | null;
	locale: string;
}

export interface StrapiExperience {
	documentId: string;
	timerange: string;
	title: string;
	company: string;
	description?: string | null;
	order?: number | null;
	locale: string;
}

export interface StrapiContact {
	documentId: string;
	name: string;
	link: string;
	href: string;
	order?: number | null;
}

export interface ContentBundle {
	homePage: StrapiHomePage | null;
	hero: StrapiHero | null;
	about: StrapiAbout | null;
	stackCategories: StrapiStackCategory[];
	projects: StrapiProject[];
	experiences: StrapiExperience[];
	contacts: StrapiContact[];
}
