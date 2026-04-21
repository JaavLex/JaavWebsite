import type { NavButtonProps } from '../../types/navbartypes';

export default function NavButton({ name, link }: NavButtonProps) {
	return (
		<button
			className="
				group
				text-[var(--fg-faint)]  
				border-l-1 
				border-r-1 
				border-[var(--rule)] 
				px-6 
				py-2 
				h-12
		"
			onClick={() => {
				document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
			}}
		>
			#
			<span className="text-[var(--fg-dim)] group-hover:text-[var(--fg)] mr-1 pl-1">
				{name}
			</span>
		</button>
	);
}
