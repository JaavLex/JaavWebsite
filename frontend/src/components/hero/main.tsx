import type { HeroProps } from '../../types/herotypes';
import HeroPicture from './heropicture';

export default function Hero({
	title,
	subtitle,
	fakepath,
	fakecomment,
	fakeconst,
	picture,
	buttons,
}: HeroProps) {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-16 w-full h-screen">
			{picture && <HeroPicture src={picture} alt={title} />}
			<div className="flex flex-col items-center md:items-start gap-4 max-w-4xl">
				<p className="text-[var(--fg-faint)]">
					{fakepath &&
						fakepath.split(' ').map((part, i) =>
							part.includes('~') ? (
								<span key={i} className="text-[var(--accent)]">
									{part + ' '}
								</span>
							) : (
								part + ' '
							),
						)}
				</p>
				<p className="text-[var(--fg-faint)] italic">
					{fakecomment && `// ${fakecomment}`}
				</p>
				<h1 className="text-9xl font-bold text-center md:text-left">{title}</h1>
				<p className="text-[var(--fg-faint)]">
					{fakeconst &&
						fakeconst.split(/("(?:\\.|[^"\\])*")/g).map((part, i) =>
							/^"(?:\\.|[^"\\])*"$/.test(part) ? (
								<span key={i} className="text-[var(--str)]">
									{part}
								</span>
							) : (
								part
							),
						)}
				</p>
				<p className="text-lg text-center md:text-left">{subtitle}</p>
			</div>
		</div>
	);
}
