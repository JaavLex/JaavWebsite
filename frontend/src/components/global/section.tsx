import type { PageSectionProps } from '../../types/globaltypes';

export default function PageSection({
	title,
	direction = 'col',
	id,
	children,
}: PageSectionProps) {
	return (
		<div className="px-10 mx-auto w-full" id={id}>
			<h2>{title}</h2>
			<p>
				<div
					className={`flex ${direction === 'col' ? 'flex-col' : 'flex-col md:flex-row'}  gap-8`}
				>
					{children}
				</div>
			</p>
		</div>
	);
}
