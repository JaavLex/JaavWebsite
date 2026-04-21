import { useState } from 'react';
import type { ProjectTabProps } from '../../../types/homepagetypes';
import StackBadge from '../stack/badge';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoMdHourglass } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import GButton from '../../global/button';

export default function ProjectTab({
	id,
	name,
	summary,
	status,
	description,
	highlights,
	links,
	techs,
}: ProjectTabProps) {
	const [isOpen, setIsOpen] = useState(false);
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div className="w-full">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`flex flex-row items-center h-48 w-full ${!isOpen ? 'bg-(--bg)' : 'bg-(--bg-elev)'} hover:bg-(--bg-elev) border border-(--rule) px-9 py-2 gap-8`}
			>
				<p className="text-(--fg-faint)">{id && (id < 10 ? `0${id}` : id)}</p>
				<div className="flex flex-col w-full justify-start gap-4">
					<h3 className="text-3xl font-bold text-left">{name}</h3>
					<p className="text-left">{summary}</p>
					<div className="flex flex-row gap-2 w-full">
						{techs && techs.map(tech => <StackBadge name={tech} hover={false} />)}
					</div>
				</div>

				<p>
					{status === 'done' ? (
						isMd ? (
							<div
								className="
    					flex
    					items-center 
    					justify-center 
    					text-(--accent)
    					border
    					border-(--accent)
    					h-12 
    					min-w-18 
    					p-4
    					"
							>
								completed
							</div>
						) : (
							<p className="text-(--accent)">
								<IoMdCheckmarkCircleOutline />
							</p>
						)
					) : isMd ? (
						<div
							className="
    					flex
    					items-center 
    					justify-center 
    					text-(--info)
    					border
    					border-(--info)
    					h-12 
    					min-w-18 
    					p-4
    					"
						>
							ongoing
						</div>
					) : (
						<p className="text-(--info)">
							<IoMdHourglass />
						</p>
					)}
				</p>
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? 'max-h-screen' : 'max-h-0'
				}`}
				style={{ height: isOpen ? 'auto' : '0px' }}
			>
				<div className="flex flex-col gap-4 p-4 border border-(--rule) bg-(--bg) px-8 md:px-16">
					<p>{description}</p>
					{highlights && (
						<ul className="list-disc marker:text-(--accent) pl-8">
							{highlights.map(highlight => (
								<li>{highlight}</li>
							))}
						</ul>
					)}
					<div>
						{links &&
							links.map(link => (
								<GButton
									text={link.name}
									type="secondary"
									onClick={() => window.open(link.link, '_blank')}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
