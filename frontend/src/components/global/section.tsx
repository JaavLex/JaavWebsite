import type { PageSectionProps } from '../../types/globaltypes';

export default function PageSection({ title, children }: PageSectionProps) {
	return (
		<div className="px-10 mx-auto max-w-7xl">
			<h2>{title}</h2>
			<p>{children}</p>
		</div>
	);
}
