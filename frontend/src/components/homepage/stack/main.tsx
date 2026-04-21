import type { StackProps } from '../../../types/homepagetypes';
import StackBadge from './badge';

export default function Stack({ stacks }: StackProps) {
	return (
		<table className="block md:table w-full">
			{stacks &&
				stacks.map(stack => (
					<tr className="block md:table-row border-(--rule) border">
						<td
							className="
              flex items-center md:table-cell
              align-middle
              text-[var(--fg-mute)]
              bg-[var(--bg-elev)]
              pl-8 h-11 md:h-22 w-full md:w-60
              border-(--rule)
              border-b md:border-b-0 md:border-r
            "
						>
							<span className="text-[var(--fg-faint)] pr-2">//</span>
							{stack.category}
						</td>
						<td className="bg-(--bg) pl-8 py-2 md:py-0">
							<div className="flex flex-row flex-wrap gap-2 items-center">
								{stack.techs &&
									stack.techs.map(tech => <StackBadge name={tech.name} />)}
							</div>
						</td>
					</tr>
				))}
		</table>
	);
}
