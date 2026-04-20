import { useMediaQuery } from 'react-responsive';

export default function NavTitle() {
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div className="flex flex-row gap-2 items-center">
			<b>javetalexandre</b>
			{isMd && <a className="text-gray-400">~/dev/website</a>}
		</div>
	);
}
