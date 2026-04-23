import Hero from '../components/hero/main';
import PageSection from '../components/global/section';
import type { HomepageProps } from '../types/homepagetypes';

export default function HomePage({ heroProps, sections }: HomepageProps) {
	return (
		<div className="flex flex-col justify-center items-center w-full pb-60">
			<Hero {...heroProps} />
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
