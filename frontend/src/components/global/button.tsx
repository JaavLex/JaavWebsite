import type { GButtonProps } from '../../types/globaltypes';

export default function GButton({ text, type = 'primary', onClick }: GButtonProps) {
	return (
		<button
			className={`group px-4 py-2 border-2 ${
				type === 'primary'
					? 'text-(--accent) hover:bg-(--accent) hover:text-(--bg)'
					: type === 'secondary' && 'border-(--bg-line) hover:bg-(--bg-elev)'
			}`}
			onClick={onClick}
		>
			{type === 'secondary' && (
				<span className="text-(--fg-faint) group-hover:text-(--accent) mr-1">$</span>
			)}
			{text}
		</button>
	);
}
