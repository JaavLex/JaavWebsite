import Hero from '../components/hero/main';
import avatar from '../assets/avatar.png';
import PageSection from '../components/global/section';
import type { HomepageProps } from '../types/homepagetypes';

export default function HomePage({ sections }: HomepageProps) {
	return (
		<div className="flex flex-col justify-center items-center w-full pb-60">
			<Hero
				fakepath="~/me $ cat readme.md"
				fakecomment="Hi ! I'm"
				title="Alexandre Javet"
				subtitle="Always learning, always creating. Experimenting with AI, web development and more. Gamer, army supply officer and developper all in the same package ! Welcome to my personal space on the web, enjoy your stay !"
				fakeconst='const job = "Full-Stack Developper";'
				openToOpportunities={true}
				picture={avatar}
				buttons={[
					{
						text: '> view.github()',
						type: 'primary',
						onClick: () => window.open('https://github.com/JaavLex', '_blank'),
					},
					{
						text: 'Download CV',
						type: 'secondary',
						onClick: () =>
							window.open('https://www.linkedin.com/in/alexandre-javet/', '_blank'),
					},
				]}
			/>
			<div className="flex flex-col justify-center mx-auto gap-32 w-full max-w-7xl">
				{sections.map(section => (
					<PageSection
						key={section.id}
						title={section.title}
						direction={section.direction}
						id={section.id}
					>
						{section.children}
					</PageSection>
				))}
			</div>
		</div>
	);
}
