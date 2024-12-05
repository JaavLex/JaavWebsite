import { Box, Typography } from '@mui/material';
import '@fontsource/ubuntu/700.css';
import '@fontsource/ubuntu';

export default function Navbar() {
	return (
		<Box className="flex flex-row justify-between w-full">
			<Typography variant="h6" fontWeight="bold" fontFamily="Ubuntu">
				JaavLex.dev
			</Typography>
			<Box>
				<ul className="flex flex-row gap-8">
					<li>
						<Typography fontFamily="Ubuntu">Projects</Typography>
					</li>
					<li>
						<Typography fontFamily="Ubuntu">Experiences</Typography>
					</li>
					<li>
						<Typography fontFamily="Ubuntu">Socials</Typography>
					</li>
				</ul>
			</Box>
		</Box>
	);
}
