import { Box, Button, Typography } from '@mui/material';
import NavButton from './NavbarComponents/NavButton';

export default function Navbar() {
	return (
		<Box className="flex flex-row justify-between w-full">
			<NavButton
				onClick={() => console.log('test')}
				variant="h6"
				weight="bold"
				value="JaavLex.dev"
			/>

			<Box>
				<ul className="flex flex-row gap-8">
					<li>
						<NavButton
							onClick={() => console.log('test')}
							variant="p"
							weight="regular"
							value="Projects"
						/>
					</li>
					<li>
						<NavButton
							onClick={() => console.log('test')}
							variant="p"
							weight="regular"
							value="Experiences"
						/>
					</li>
					<li>
						<NavButton
							onClick={() => console.log('test')}
							variant="p"
							weight="regular"
							value="Socials"
						/>
					</li>
				</ul>
			</Box>
		</Box>
	);
}
