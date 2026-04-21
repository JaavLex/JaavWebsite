import type { GButtonProps } from '../../types/globaltypes';

export default function GButton({ text, type = 'primary', onClick }: GButtonProps) {
	return (
		<button
			className={`group px-4 py-2 border-2 ${
				type === 'primary'
					? 'text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]'
					: type === 'secondary' &&
						'border-[var(--bg-line)] hover:bg-[var(--bg-elev)]'
			}`}
			onClick={onClick}
		>
			{type === 'secondary' && (
				<span className="text-[var(--fg-faint)] group-hover:text-[var(--accent)] mr-1">
					$
				</span>
			)}
			{text}
		</button>
	);
}
