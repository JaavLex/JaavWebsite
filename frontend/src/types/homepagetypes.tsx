import type { PageSectionProps } from './globaltypes';

interface HomepageProps {
	sections: PageSectionProps[];
}

interface Trait {
	name: string;
	description?: string;
}

interface TraitsTypes {
	title: string;
	traits?: Trait[];
}

interface Stack {
	category: string;
	techs: string[];
}

interface StackProps {
	stacks: Stack[];
}

interface ProjectLinks {
	name: string;
	link: string;
}

interface ProjectTabProps {
	id?: number;
	name: string;
	summary: string;
	status: 'done' | 'ongoing';
	description: string;
	highlights: string[];
	links: ProjectLinks[];
	techs: string[];
}

interface ProjectsProps {
	projects: ProjectTabProps[];
}

export type {
	HomepageProps,
	Trait,
	TraitsTypes,
	Stack,
	StackProps,
	ProjectLinks,
	ProjectTabProps,
	ProjectsProps,
};
