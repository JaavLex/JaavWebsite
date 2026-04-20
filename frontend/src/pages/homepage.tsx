import Hero from '../components/hero/main';
import avatar from '../assets/avatar.png';

export default function HomePage() {
	return (
		<div className="homepage">
			<Hero
				fakepath="~/me $ cat readme.md"
				fakecomment="Hi ! I'm"
				title="Alexandre Javet"
				subtitle="Always learning, always creating. Experimenting with AI, web development and more. Gamer, army supply officer and developper all in the same package ! Welcome to my personal space on the web, enjoy your stay !"
				fakeconst='const job = "Full-Stack Developper";'
				openToOpportunities={true}
				picture={avatar}
			/>
		</div>
	);
}
