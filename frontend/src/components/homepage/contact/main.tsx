import { useMediaQuery } from 'react-responsive';
import type { ContactsProps } from '../../../types/homepagetypes';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Contacts({ contacts }: ContactsProps) {
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div className="">
			{contacts &&
				contacts.map(contact => (
					<a
						href={contact.href}
						className="flex flex-col md:flex-row justify-between bg-(--bg) border border-(--rule) items-center md:gap-8 max-w-2xl h-20 px-8 hover:bg-(--bg-elev)"
					>
						<span className="text-(--fg-dim)">
							<span className="pr-2 text-(--fg-faint)">{'>'}</span>
							{contact.name}
						</span>
						<span className="flex flex-row items-center gap-2 pb-8 md:pb-0">
							{contact.link}{' '}
							{!isMd && (
								<span className="text-(--fg-faint)">
									<HiOutlineExternalLink />
								</span>
							)}
						</span>
						{isMd && (
							<span className="text-(--fg-faint)">
								<HiOutlineExternalLink />
							</span>
						)}
					</a>
				))}
		</div>
	);
}
