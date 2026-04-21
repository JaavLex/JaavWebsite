import type { ProjectsProps } from '../../../types/homepagetypes';
import ProjectTab from './projecttab';

export default function Projects({ projects }: ProjectsProps) {
	return (
		<div>
			{projects.map(project => (
				<ProjectTab
					id={project.id}
					name={project.name}
					summary={project.summary}
					status={project.status}
					description={project.description}
					highlights={project.highlights}
					links={project.links}
					techs={project.techs}
				/>
			))}
		</div>
	);
}
