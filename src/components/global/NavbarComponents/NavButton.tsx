import { Button, Typography } from '@mui/material';
import '@fontsource/ubuntu/700.css';
import '@fontsource/ubuntu';

type NavButtonProps = {
	onClick: () => void;
	variant: any;
	weight: string;
	value: string;
};

export default function NavButton({
	onClick,
	variant,
	weight,
	value,
}: NavButtonProps) {
	return (
		<Button
			variant="text"
			onClick={() => onClick()}
			sx={{ textTransform: 'none', color: 'white' }}
		>
			<Typography variant={variant} fontWeight={weight} fontFamily="Ubuntu">
				{value}
			</Typography>
		</Button>
	);
}
