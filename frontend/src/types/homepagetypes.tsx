interface Trait {
	name: string;
	description?: string;
}

interface TraitsTypes {
	title: string;
	traits?: Trait[];
}

interface StackBadgeProps {
	name: string;
}

interface Stack {
	category: string;
	techs: StackBadgeProps[];
}

interface StackProps {
	stacks: Stack[];
}

export type { Trait, TraitsTypes, StackBadgeProps, Stack, StackProps };
