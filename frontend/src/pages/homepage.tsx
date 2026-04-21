import Hero from '../components/hero/main';
import avatar from '../assets/avatar.png';
import PageSection from '../components/global/section';
import TraitsBlock from '../components/homepage/traits';
import Stack from '../components/homepage/stack/main';

export default function HomePage() {
	return (
		<div className="pb-60">
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
			<div>
				<PageSection title="About Me">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="flex flex-col gap-4">
							<div className="text-justify">
								Full-stack developer curious about new technologies and
								possibilities. Love to learn and apply new technologies and concepts.
								Experience that's growing constantly with a wide range of
								technologies.
							</div>

							<div className="text-[var(--fg-mute)] text-justify">
								Outside of full-stack developpement, experimenting with game
								developpement and creating game engines from scratch with libraries
								in C++. Still active as a swiss army supply officer (Lieutenant),
								platoon leader which has given me team management and project
								management experience.
							</div>
						</div>
						<TraitsBlock
							title="profile.traits[]"
							traits={[{ name: 'test', description: 'test2' }]}
						/>
					</div>
				</PageSection>
				<PageSection title="stack">
					<div className="flex flex-col gap-8">
						<p>An overview of the Tech Stack that I have experience in !</p>
						<Stack
							stacks={[
								{ category: 'test', techs: [{ name: 'test2' }, { name: 'test3' }] },
								{ category: 'test2', techs: [{ name: 'test4' }, { name: 'test5' }] },
							]}
						/>
					</div>
				</PageSection>
			</div>
		</div>
	);
}
