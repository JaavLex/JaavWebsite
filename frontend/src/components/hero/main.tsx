import { useMediaQuery } from 'react-responsive';
import type { HeroProps } from '../../types/herotypes';
import HeroPicture from './heropicture';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import GButton from '../global/button';

export default function Hero({
	title,
	subtitle,
	fakepath,
	fakecomment,
	fakeconst,
	picture,
	openToOpportunities,
	buttons,
}: HeroProps) {
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div className="flex flex-col w-full h-screen">
			<div className="flex items-center md:items-end justify-center md:justify-end pt-14 md:pt-24 md:pr-24 w-full ">
				{openToOpportunities && isMd && (
					<pre className="flex items-center gap-2">
						<BiSolidBadgeCheck className="glowing-text-badge" size={24} />
						<p className="text-(--fg-dim) md:text-2xl">Open to job opportunities!</p>
					</pre>
				)}
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-16 w-full h-screen">
				{picture && <HeroPicture src={picture} alt={title} />}
				<div className="flex flex-col items-center md:items-start gap-4 max-w-4xl">
					<p className="text-(--fg-faint)">
						{fakepath &&
							fakepath.split(' ').map((part, i) =>
								part.includes('~') ? (
									<span key={i} className="text-(--accent)">
										{part + ' '}
									</span>
								) : (
									part + ' '
								),
							)}
					</p>
					<p className="text-(--fg-faint) italic">
						{fakecomment && `// ${fakecomment}`}
					</p>
					<h1 className="text-9xl font-bold text-center md:text-left typewriter-title whitespace-normal md:whitespace-nowrap">
						{title}
					</h1>
					<p className="text-(--fg-faint)">
						{fakeconst &&
							fakeconst.split(/("(?:\\.|[^"\\])*")/g).map((part, i) =>
								/^"(?:\\.|[^"\\])*"$/.test(part) ? (
									<span key={i} className="text-(--str)">
										{part}
									</span>
								) : (
									part
								),
							)}
					</p>
					<p className="text-lg text-justify px-10 md:text-left md:px-0">
						{subtitle}
					</p>
					<div className="flex gap-4">
						{buttons && buttons.map((button, i) => <GButton key={i} {...button} />)}
					</div>
				</div>
			</div>
		</div>
	);
}
