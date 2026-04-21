interface Trait {
	name: string;
	description?: string;
}

interface TraitsTypes {
	title: string;
	traits?: Trait[];
}

export type { Trait, TraitsTypes };
