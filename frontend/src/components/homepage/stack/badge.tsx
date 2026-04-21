import type { StackBadgeProps } from '../../../types/homepagetypes';

export default function StackBadge({ name }: StackBadgeProps) {
	return (
		<div
			className="
    flex
    items-center 
    justify-center 
    text-[var(--fg)]
    hover:text-[var(--accent)]
    border-1 
    border-[var(--rule)]
    hover:border-[var(--accent)]
    h-12 
    min-w-18 
    p-4
    "
		>
			{name}
		</div>
	);
}
