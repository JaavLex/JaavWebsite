import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isLocale, type Locale } from '../../i18n';

export default function LocaleToggle() {
	const navigate = useNavigate();
	const location = useLocation();
	const { locale: paramLocale } = useParams();
	const active: Locale = isLocale(paramLocale) ? paramLocale : DEFAULT_LOCALE;

	const switchTo = (next: Locale) => {
		if (next === active) return;
		const rest = location.pathname.replace(/^\/(en|fr)(?=\/|$)/, '') || '';
		navigate(`/${next}${rest}${location.search}${location.hash}`);
	};

	return (
		<div className="flex items-center gap-1 text-sm">
			{SUPPORTED_LOCALES.map((loc, i) => (
				<span key={loc} className="flex items-center">
					<button
						type="button"
						onClick={() => switchTo(loc)}
						className={
							loc === active
								? 'text-(--fg) font-semibold'
								: 'text-(--fg-dim) hover:text-(--fg)'
						}
						aria-current={loc === active ? 'true' : undefined}
					>
						{loc.toUpperCase()}
					</button>
					{i < SUPPORTED_LOCALES.length - 1 && (
						<span className="text-(--fg-faint) mx-1">|</span>
					)}
				</span>
			))}
		</div>
	);
}
