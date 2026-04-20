import type { NavButtonProps } from '../../types/navbartypes';

export default function NavButton({ name, link }: NavButtonProps) {
	return <button className="hover:bg-gray-700 px-6 py-2 h-12">{name}</button>;
}
