import type { NavButtonProps } from '../../types/navbartypes';

export default function NavButton({ name, link, onClick }: NavButtonProps) {
	return (
		<button
			className="
				group
				text-(--fg-faint)
				border-l
				border-r
				border-(--rule)
				px-6
				py-2
				h-12
		"
			onClick={() => {
				document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
				onClick?.();
			}}
		>
			#
			<span className="text-(--fg-dim) group-hover:text-(--fg) mr-1 pl-1">
				{name}
			</span>
		</button>
	);
}
