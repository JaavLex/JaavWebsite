import type { ContentBundle, StrapiHeroButton } from '../types/strapi';
import type { PageSectionProps, GButtonProps } from '../types/globaltypes';
import type { HeroProps } from '../types/herotypes';
import TraitsBlock from '../components/homepage/traits';
import Stack from '../components/homepage/stack/main';
import Projects from '../components/homepage/projects/main';
import Experiences from '../components/homepage/experience/main';
import Contacts from '../components/homepage/contact/main';
import { mediaUrl } from './strapi';

function buttonOnClick(b: StrapiHeroButton): () => void {
	return () => {
		if (b.file) {
			const url = mediaUrl(b.file);
			if (!url) return;
			const a = document.createElement('a');
			a.href = url;
			a.download = b.file.name || '';
			a.rel = 'noopener noreferrer';
			a.target = '_blank';
			document.body.appendChild(a);
			a.click();
			a.remove();
		} else if (b.href) {
			window.open(b.href, '_blank', 'noopener,noreferrer');
		}
	};
}

export function buildHeroProps(data: ContentBundle): HeroProps | null {
	const hero = data.hero;
	if (!hero) return null;

	const buttons: GButtonProps[] | undefined = hero.buttons?.map(b => ({
		text: b.label,
		type: b.variant,
		onClick: buttonOnClick(b),
	}));

	const picture = mediaUrl(hero.picture) ?? undefined;
	const fakeconst =
		hero.jobTitle && hero.jobTitleLabel
			? `const ${hero.jobTitleLabel} = "${hero.jobTitle}";`
			: undefined;

	return {
		title: hero.name,
		subtitle: hero.subtitle ?? '',
		fakepath: hero.fakepath ?? undefined,
		fakecomment: hero.fakecomment ?? undefined,
		fakeconst,
		picture,
		buttons,
		openToOpportunities: hero.openToOpportunities,
	};
}

export function buildSections(data: ContentBundle): PageSectionProps[] {
	const homePage = data.homePage;
	const about = data.about;
	if (!homePage) return [];

	const sections: PageSectionProps[] = [];

	sections.push({
		title: homePage.aboutTitle,
		direction: 'row',
		id: 'about',
		children: (
			<>
				<div className="flex flex-col gap-4">
					{about?.intro && <div className="text-justify">{about.intro}</div>}
					{about?.secondary && (
						<div className="text-(--fg-mute) text-justify">{about.secondary}</div>
					)}
				</div>
				{homePage.aboutTraitsTitle && about?.traits && about.traits.length > 0 && (
					<TraitsBlock
						title={homePage.aboutTraitsTitle}
						traits={about.traits.map(tt => ({
							name: tt.name,
							description: tt.description,
						}))}
					/>
				)}
			</>
		),
	});

	sections.push({
		title: homePage.stackTitle,
		direction: 'col',
		id: 'stack',
		children: (
			<>
				{homePage.stackIntro && <p>{homePage.stackIntro}</p>}
				<Stack
					stacks={data.stackCategories.map(s => ({
						category: s.category,
						techs: s.techs ?? [],
					}))}
				/>
			</>
		),
	});

	sections.push({
		title: homePage.projectsTitle,
		direction: 'col',
		id: 'projects',
		children: (
			<Projects
				projects={data.projects.map((p, i) => ({
					id: i + 1,
					name: p.name,
					summary: p.summary ?? '',
					status: p.status,
					description: p.description ?? '',
					highlights: p.highlights ?? [],
					links: (p.links ?? []).map(l => ({ name: l.name, link: l.href })),
					techs: p.techs ?? [],
				}))}
			/>
		),
	});

	sections.push({
		title: homePage.experienceTitle,
		direction: 'col',
		id: 'experience',
		children: (
			<>
				{homePage.experienceIntro && <p>{homePage.experienceIntro}</p>}
				<Experiences
					experiences={data.experiences.map(e => ({
						timerange: e.timerange,
						title: e.title,
						company: e.company,
						description: e.description ?? undefined,
					}))}
				/>
			</>
		),
	});

	sections.push({
		title: homePage.contactTitle,
		direction: 'col',
		id: 'contactme',
		children: (
			<>
				{homePage.contactIntro && <p>{homePage.contactIntro}</p>}
				<Contacts
					contacts={data.contacts.map(c => ({
						name: c.name,
						link: c.link,
						href: c.href,
					}))}
				/>
			</>
		),
	});

	return sections;
}
