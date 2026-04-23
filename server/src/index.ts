import type { Core } from '@strapi/strapi';

export default {
	register() {},

	async bootstrap({ strapi }: { strapi: Core.Strapi }) {
		if (process.env.NODE_ENV === 'production') return;
		try {
			await seedHomePage(strapi);
			await seedHero(strapi);
			await seedAbout(strapi);
			await seedTraits(strapi);
			await seedStackCategories(strapi);
			await seedProjects(strapi);
			await seedExperiences(strapi);
			await seedContacts(strapi);
		} catch (err) {
			strapi.log.error('Seeding failed:');
			strapi.log.error(err);
		}
	},
};

async function seedHomePage(strapi: Core.Strapi) {
	const existing = await strapi
		.documents('api::home-page.home-page')
		.findFirst({ locale: 'en' });
	if (existing) return;

	const enData = {
		aboutTitle: 'About Me',
		aboutTraitsTitle: 'profile.traits[]',
		stackTitle: 'Stack',
		stackIntro: 'An overview of the Tech Stack that I have experience in!',
		projectsTitle: 'Projects',
		experienceTitle: 'Experience',
		experienceIntro: 'My work experience timeline',
		contactTitle: 'Contact Me',
		contactIntro: "If you'd like to contact me!",
		footerText: '© 2026 Alexandre Javet',
	};

	const frData = {
		aboutTitle: 'À propos',
		aboutTraitsTitle: 'profil.traits[]',
		stackTitle: 'Stack',
		stackIntro: 'Un aperçu des technologies que je maîtrise !',
		projectsTitle: 'Projets',
		experienceTitle: 'Expérience',
		experienceIntro: 'Chronologie de mon expérience professionnelle',
		contactTitle: 'Me contacter',
		contactIntro: 'Si vous souhaitez me contacter !',
		footerText: '© 2026 Alexandre Javet',
	};

	await strapi.documents('api::home-page.home-page').update({
		documentId: undefined as any,
		data: enData,
		locale: 'en',
		status: 'published',
	});
	await strapi.documents('api::home-page.home-page').update({
		documentId: undefined as any,
		data: frData,
		locale: 'fr',
		status: 'published',
	});
	strapi.log.info('Seeded: home-page');
}

async function seedHero(strapi: Core.Strapi) {
	const existing = await strapi.documents('api::hero.hero').findFirst({ locale: 'en' });
	if (existing) return;

	const enData = {
		fakepath: '~/me $ cat readme.md',
		fakecomment: "Hi! I'm",
		name: 'Alexandre Javet',
		subtitle:
			'Always learning, always creating. Experimenting with AI, web development and more. Gamer, army supply officer and developer all in the same package! Welcome to my personal space on the web, enjoy your stay!',
		jobTitleLabel: 'job',
		jobTitle: 'Full-Stack Developer',
		openToOpportunities: true,
		opportunitiesText: 'Open to job opportunities!',
		buttons: [
			{
				label: '> view.github()',
				href: 'https://github.com/JaavLex',
				variant: 'primary' as const,
			},
			{
				label: 'Download CV',
				href: 'https://www.linkedin.com/in/alexandre-javet/',
				variant: 'secondary' as const,
			},
		],
	};

	const frData = {
		...enData,
		fakepath: '~/moi $ cat readme.md',
		fakecomment: 'Salut ! Je suis',
		subtitle:
			"Toujours en train d'apprendre, toujours en train de créer. J'expérimente avec l'IA, le développement web et bien plus. Gamer, officier d'approvisionnement dans l'armée et développeur, tout en un ! Bienvenue dans mon espace personnel sur le web, bon séjour !",
		jobTitleLabel: 'métier',
		jobTitle: 'Développeur Full-Stack',
		opportunitiesText: 'Ouvert aux opportunités professionnelles !',
		buttons: [
			{
				label: '> view.github()',
				href: 'https://github.com/JaavLex',
				variant: 'primary' as const,
			},
			{
				label: 'Télécharger CV',
				href: 'https://www.linkedin.com/in/alexandre-javet/',
				variant: 'secondary' as const,
			},
		],
	};

	await strapi.documents('api::hero.hero').update({
		documentId: undefined as any,
		data: enData,
		locale: 'en',
		status: 'published',
	});
	await strapi.documents('api::hero.hero').update({
		documentId: undefined as any,
		data: frData,
		locale: 'fr',
		status: 'published',
	});
	strapi.log.info('Seeded: hero');
}

async function seedAbout(strapi: Core.Strapi) {
	const existing = await strapi.documents('api::about.about').findFirst({ locale: 'en' });
	if (existing) return;

	const enData = {
		intro:
			"Full-stack developer curious about new technologies and possibilities. Love to learn and apply new technologies and concepts. Experience that's growing constantly with a wide range of technologies.",
		secondary:
			'Outside of full-stack development, experimenting with game development and creating game engines from scratch with libraries in C++. Still active as a Swiss army supply officer (Lieutenant), platoon leader which has given me team management and project management experience.',
	};

	const frData = {
		intro:
			"Développeur full-stack curieux des nouvelles technologies et possibilités. J'adore apprendre et appliquer de nouvelles technologies et concepts. Une expérience qui grandit constamment avec un large éventail de technologies.",
		secondary:
			"En dehors du développement full-stack, j'expérimente avec le développement de jeux vidéo et la création de moteurs de jeu from scratch avec des bibliothèques en C++. Toujours actif en tant qu'officier d'approvisionnement de l'armée suisse (Lieutenant), chef de section, ce qui m'a apporté une expérience en gestion d'équipe et de projet.",
	};

	await strapi.documents('api::about.about').update({
		documentId: undefined as any,
		data: enData,
		locale: 'en',
		status: 'published',
	});
	await strapi.documents('api::about.about').update({
		documentId: undefined as any,
		data: frData,
		locale: 'fr',
		status: 'published',
	});
	strapi.log.info('Seeded: about');
}

async function seedTraits(strapi: Core.Strapi) {
	const existing = await strapi.documents('api::trait.trait').findFirst({ locale: 'en' });
	if (existing) return;

	const traits = [
		{
			en: { name: 'Curious', description: 'Always eager to learn something new.' },
			fr: {
				name: 'Curieux',
				description: "Toujours avide d'apprendre quelque chose de nouveau.",
			},
			order: 1,
		},
		{
			en: {
				name: 'Rigorous',
				description: 'Focused on quality and detail in everything I ship.',
			},
			fr: {
				name: 'Rigoureux',
				description: 'Soucieux de la qualité et du détail dans tout ce que je livre.',
			},
			order: 2,
		},
	];

	for (const t of traits) {
		const created = await strapi.documents('api::trait.trait').create({
			data: { ...t.en, order: t.order },
			locale: 'en',
			status: 'published',
		});
		await strapi.documents('api::trait.trait').update({
			documentId: created.documentId,
			data: { ...t.fr, order: t.order },
			locale: 'fr',
			status: 'published',
		});
	}
	strapi.log.info('Seeded: traits');
}

async function seedStackCategories(strapi: Core.Strapi) {
	const existing = await strapi
		.documents('api::stack-category.stack-category')
		.findFirst({ locale: 'en' });
	if (existing) return;

	const stacks = [
		{
			en: { category: 'Frontend' },
			fr: { category: 'Frontend' },
			techs: ['React', 'TypeScript', 'Tailwind', 'Vite'],
			order: 1,
		},
		{
			en: { category: 'Backend' },
			fr: { category: 'Backend' },
			techs: ['Node.js', 'Strapi', 'PostgreSQL', 'REST'],
			order: 2,
		},
	];

	for (const s of stacks) {
		const created = await strapi.documents('api::stack-category.stack-category').create({
			data: { ...s.en, techs: s.techs, order: s.order },
			locale: 'en',
			status: 'published',
		});
		await strapi.documents('api::stack-category.stack-category').update({
			documentId: created.documentId,
			data: { ...s.fr, techs: s.techs, order: s.order },
			locale: 'fr',
			status: 'published',
		});
	}
	strapi.log.info('Seeded: stack-categories');
}

async function seedProjects(strapi: Core.Strapi) {
	const existing = await strapi.documents('api::project.project').findFirst({ locale: 'en' });
	if (existing) return;

	const projects = [
		{
			name: 'Sample Project A',
			status: 'done' as const,
			techs: ['React', 'TypeScript'],
			order: 1,
			links: [{ name: 'Repo', href: 'https://github.com/JaavLex' }],
			en: {
				summary: 'A short summary of what this project does.',
				description: 'Replace this description with the real one in the admin UI.',
				highlights: ['Key highlight #1', 'Key highlight #2'],
			},
			fr: {
				summary: 'Un court résumé de ce que fait ce projet.',
				description: "Remplacez cette description par la vraie dans l'admin.",
				highlights: ['Point clé #1', 'Point clé #2'],
			},
		},
		{
			name: 'Sample Project B',
			status: 'ongoing' as const,
			techs: ['Node.js', 'Strapi'],
			order: 2,
			links: [],
			en: {
				summary: 'Another placeholder summary for an in-progress project.',
				description: 'In-progress work — update in admin UI.',
				highlights: ['Ongoing milestone'],
			},
			fr: {
				summary: 'Un autre résumé pour un projet en cours.',
				description: "Travail en cours — à mettre à jour dans l'admin.",
				highlights: ['Jalon en cours'],
			},
		},
	];

	for (const p of projects) {
		const created = await strapi.documents('api::project.project').create({
			data: {
				name: p.name,
				status: p.status,
				techs: p.techs,
				order: p.order,
				links: p.links,
				...p.en,
			},
			locale: 'en',
			status: 'published',
		});
		await strapi.documents('api::project.project').update({
			documentId: created.documentId,
			data: {
				name: p.name,
				status: p.status,
				techs: p.techs,
				order: p.order,
				links: p.links,
				...p.fr,
			},
			locale: 'fr',
			status: 'published',
		});
	}
	strapi.log.info('Seeded: projects');
}

async function seedExperiences(strapi: Core.Strapi) {
	const existing = await strapi
		.documents('api::experience.experience')
		.findFirst({ locale: 'en' });
	if (existing) return;

	const experiences = [
		{
			timerange: '2019 - 2023',
			order: 1,
			en: {
				title: 'Full-Stack Developer',
				company: 'EPFL',
				description:
					'Worked on internal tools and web applications. Replace with real content in the admin.',
			},
			fr: {
				title: 'Développeur Full-Stack',
				company: 'EPFL',
				description:
					"Travaillé sur des outils internes et applications web. À remplacer par du contenu réel dans l'admin.",
			},
		},
		{
			timerange: '2023 - 2024',
			order: 2,
			en: {
				title: 'Supply Officer',
				company: 'Swiss Army',
				description:
					'Platoon leader duties, logistics planning, team management. Replace with real content in the admin.',
			},
			fr: {
				title: "Officier d'approvisionnement",
				company: 'Armée suisse',
				description:
					"Chef de section, planification logistique, gestion d'équipe. À remplacer dans l'admin.",
			},
		},
	];

	for (const e of experiences) {
		const created = await strapi.documents('api::experience.experience').create({
			data: { timerange: e.timerange, order: e.order, ...e.en },
			locale: 'en',
			status: 'published',
		});
		await strapi.documents('api::experience.experience').update({
			documentId: created.documentId,
			data: { timerange: e.timerange, order: e.order, ...e.fr },
			locale: 'fr',
			status: 'published',
		});
	}
	strapi.log.info('Seeded: experiences');
}

async function seedContacts(strapi: Core.Strapi) {
	const existing = await strapi.documents('api::contact.contact').findFirst({});
	if (existing) return;

	const contacts = [
		{
			name: 'e-mail',
			link: 'javetalexandre@gmail.com',
			href: 'mailto:javetalexandre@gmail.com',
			order: 1,
		},
		{
			name: 'github',
			link: 'github.com/JaavLex/',
			href: 'https://github.com/JaavLex/',
			order: 2,
		},
	];

	for (const c of contacts) {
		await strapi.documents('api::contact.contact').create({
			data: c,
			status: 'published',
		});
	}
	strapi.log.info('Seeded: contacts');
}
