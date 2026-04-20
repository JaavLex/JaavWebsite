import type { HeroProps } from '../../types/herotypes';

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
		<div className="flex flex-col items-center justify-center gap-4 w-full h-screen">
			<div className="flex flex-col gap-4 max-w-4xl">
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
				<p className="text-[var(--fg-faint)]">
					{picture && `// Picture: ${picture}`}
				</p>
				<p className="text-[var(--fg-faint)] italic">
					{fakecomment && `// ${fakecomment}`}
				</p>
				<h1 className="text-9xl font-bold">{title}</h1>
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
				<p className="text-lg">{subtitle}</p>
			</div>
		</div>
	);
}
