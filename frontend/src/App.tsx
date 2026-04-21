import './App.css';
import Background from './components/background/main';
import NavBar from './components/navbar/main';
import HomePage from './pages/homepage';
import TraitsBlock from './components/homepage/traits';
import Stack from './components/homepage/stack/main';
import Projects from './components/homepage/projects/main';
import type { PageSectionProps } from './types/globaltypes';
import Experiences from './components/homepage/experience/main';
import Contacts from './components/homepage/contact/main';

const sections: PageSectionProps[] = [
	{
		title: 'About Me',
		direction: 'row',
		id: 'about',
		children: (
			<>
				<div className="flex flex-col gap-4">
					<div className="text-justify">
						Full-stack developer curious about new technologies and possibilities.
						Love to learn and apply new technologies and concepts. Experience that's
						growing constantly with a wide range of technologies.
					</div>

					<div className="text-(--fg-mute) text-justify">
						Outside of full-stack developpement, experimenting with game
						developpement and creating game engines from scratch with libraries in
						C++. Still active as a swiss army supply officer (Lieutenant), platoon
						leader which has given me team management and project management
						experience.
					</div>
				</div>
				<TraitsBlock
					title="profile.traits[]"
					traits={[{ name: 'test', description: 'test2' }]}
				/>
			</>
		),
	},
	{
		title: 'Stack',
		direction: 'col',
		id: 'stack',
		children: (
			<>
				<p>An overview of the Tech Stack that I have experience in !</p>
				<Stack
					stacks={[
						{ category: 'test', techs: ['test2', 'test3'] },
						{ category: 'test2', techs: ['test4', 'test5'] },
					]}
				/>
			</>
		),
	},
	{
		title: 'Projects',
		direction: 'col',
		id: 'projects',
		children: (
			<Projects
				projects={[
					{
						id: 1,
						name: 'test',
						summary: 'lorem ipsum iiidsiidsidsids',
						status: 'done',
						description: 'test',
						highlights: ['yo', 'man'],
						links: [{ name: 'test', link: 'test2' }],
						techs: ['hey', 'bro'],
					},
					{
						id: 2,
						name: 'test',
						summary: 'lorem ipsum iiidsiidsidsids',
						status: 'ongoing',
						description: 'test',
						highlights: ['yo', 'man'],
						links: [{ name: 'test', link: 'test2' }],
						techs: ['hey', 'bro'],
					},
				]}
			/>
		),
	},
	{
		title: 'Experience',
		direction: 'col',
		id: 'experience',
		children: (
			<>
				<p>My work experience timeline</p>
				<Experiences
					experiences={[
						{
							timerange: '2019 - 2023',
							title: 'Full-Stack dev',
							company: 'EPFL',
							description:
								'Anim deserunt labore ut enim quis officia consectetur ipsum deserunt adipisicing aliqua incididunt. Incididunt dolore officia qui commodo mollit ut. Velit aliqua magna consequat et proident Lorem sit.',
						},
						{
							timerange: '2023 - 2024',
							title: 'Supply Officer',
							company: 'Swiss Army',
							description:
								'Anim deserunt labore ut enim quis officia consectetur ipsum deserunt adipisicing aliqua incididunt. Incididunt dolore officia qui commodo mollit ut. Velit aliqua magna consequat et proident Lorem sit.',
						},
					]}
				/>
			</>
		),
	},
	{
		title: 'Contact Me',
		direction: 'col',
		id: 'contactme',
		children: (
			<>
				<p>If you'd like to contact me !</p>
				<Contacts
					contacts={[
						{
							name: 'e-mail',
							link: 'javetalexandre@gmail.com',
							href: 'mailto:javetalexandre@gmail.com',
						},
						{
							name: 'github',
							link: 'github.com/JaavLex/',
							href: 'https://github.com/JaavLex/',
						},
					]}
				/>
			</>
		),
	},
];

function App() {
	return (
		<>
			<Background />
			<NavBar
				Buttons={sections.map(section => ({
					name: section.title,
					link: section.id,
				}))}
			/>
			<HomePage sections={sections} />
		</>
	);
}

export default App;
