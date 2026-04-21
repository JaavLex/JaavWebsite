import type { StackBadgeProps } from '../../../types/homepagetypes';

export default function StackBadge({ name, hover }: StackBadgeProps) {
	return (
		<div
			className={`
    flex
    items-center 
    justify-center 
    text-(--fg)
    border 
    border-(--rule)
    ${hover && 'hover:text-(--accent) hover:border-(--accent)'}
    h-12 
    min-w-18 
    p-4
    `}
		>
			{name}
		</div>
	);
}
