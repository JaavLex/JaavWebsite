import type { ExperiencesProps } from '../../../types/homepagetypes';

export default function Experiences({ experiences }: ExperiencesProps) {
	return (
		<table className="bg-(--bg)">
			{experiences.map(experience => (
				<tr className="flex flex-col md:table-row border border-(--rule) md:h-52">
					<td className="md:table-cell h-full md:min-w-64 pt-8 md:pt-0">
						<div className="flex flex-col h-full justify-start items-start px-8 text-(--fg-dim)">
							{experience.timerange}
						</div>
					</td>
					<td className="md:table-cell flex flex-col gap-2 pt-4 md:pt-8 px-8 md:pl-0 pb-8 md:pb-0">
						<h3 className="text-2xl font-bold">{experience.title}</h3>
						<h4 className="text-(--accent)">@ {experience.company}</h4>
						<p className="text-(--fg-dim) text-justify">{experience.description}</p>
					</td>
				</tr>
			))}
		</table>
	);
}
