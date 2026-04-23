import { useEffect } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n, { DEFAULT_LOCALE, isLocale, type Locale } from './i18n';
import './App.css';
import Background from './components/background/main';
import NavBar from './components/navbar/main';
import HomePage from './pages/homepage';
import { ContentProvider } from './context/ContentProvider';
import { useContent } from './context/useContent';
import { buildHeroProps, buildSections } from './lib/buildSections';

function detectLocale(): Locale {
	const stored = localStorage.getItem('locale');
	if (isLocale(stored ?? undefined)) return stored as Locale;
	const nav = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : '';
	if (isLocale(nav)) return nav;
	return DEFAULT_LOCALE;
}

function LocaleRedirect() {
	return <Navigate to={`/${detectLocale()}`} replace />;
}

function LoadingScreen() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<p className="text-(--fg-dim)">{t('common.loading')}</p>
		</div>
	);
}

function ErrorScreen({ onRetry }: { onRetry: () => void }) {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen gap-4">
			<p className="text-(--fg-dim)">{t('common.error.generic')}</p>
			<button
				type="button"
				onClick={onRetry}
				className="border border-(--rule) text-(--fg) px-4 py-2 hover:bg-(--fg-faint)"
			>
				{t('common.error.retry')}
			</button>
		</div>
	);
}

function HomeContent() {
	const { status, data, error, refetch } = useContent();

	if (status === 'loading') return <LoadingScreen />;
	if (status === 'error') {
		console.error('Content load failed:', error);
		return <ErrorScreen onRetry={refetch} />;
	}
	if (!data) return <LoadingScreen />;

	const heroProps = buildHeroProps(data);
	const sections = buildSections(data);

	if (!heroProps) {
		return <ErrorScreen onRetry={refetch} />;
	}

	return (
		<>
			<NavBar
				Buttons={sections.map(section => ({
					name: section.title,
					link: section.id,
				}))}
			/>
			<HomePage heroProps={heroProps} sections={sections} />
			{data.homePage?.footerText && <footer>{data.homePage.footerText}</footer>}
		</>
	);
}

function LocalizedShell() {
	const { locale } = useParams();

	useEffect(() => {
		if (!isLocale(locale)) return;
		if (i18n.language !== locale) i18n.changeLanguage(locale);
		document.documentElement.lang = locale;
		localStorage.setItem('locale', locale);
	}, [locale]);

	if (!isLocale(locale)) {
		return <Navigate to={`/${detectLocale()}`} replace />;
	}

	return (
		<>
			<Background />
			<ContentProvider locale={locale}>
				<HomeContent />
			</ContentProvider>
		</>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<LocaleRedirect />} />
			<Route path="/:locale/*" element={<LocalizedShell />} />
			<Route path="*" element={<LocaleRedirect />} />
		</Routes>
	);
}

export default App;
