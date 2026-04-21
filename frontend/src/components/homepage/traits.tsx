import type { TraitsTypes } from '../../types/homepagetypes';

export default function TraitsBlock({ title, traits }: TraitsTypes) {
	return (
		<pre className="md:min-w-xl">
			<h3 className="text-[var(--fg-faint)] pb-2">// {title}</h3>
			{traits && (
				<table className="border-0 w-full">
					{traits &&
						traits.map(trait => (
							<tr className="border-0">
								<td className="text-[var(--accent)]">{trait.name}</td>
								<td>{trait.description}</td>
							</tr>
						))}
				</table>
			)}
		</pre>
	);
}
