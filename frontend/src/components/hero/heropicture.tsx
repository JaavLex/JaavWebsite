import type { HeroPictureProps } from '../../types/herotypes';

export default function HeroPicture({ src, alt }: HeroPictureProps) {
	return (
		<div className="p-12 flex items-center justify-center">
			<img
				src={src}
				alt={alt}
				className="h-[27vh] object-cover rounded-full aspect-square"
			/>
		</div>
	);
}
