import axios from 'axios';
import type {
	ContentBundle,
	StrapiAbout,
	StrapiContact,
	StrapiExperience,
	StrapiHero,
	StrapiHomePage,
	StrapiMedia,
	StrapiProject,
	StrapiStackCategory,
} from '../types/strapi';

const envUrl = import.meta.env.VITE_STRAPI_URL as string | undefined;
export const STRAPI_BASE_URL: string =
	envUrl !== undefined ? envUrl : import.meta.env.DEV ? 'http://localhost:1337' : '';

const client = axios.create({
	baseURL: STRAPI_BASE_URL,
	timeout: 10000,
});

interface StrapiSingleResponse<T> {
	data: T | null;
}
interface StrapiCollectionResponse<T> {
	data: T[];
}

async function getSingle<T>(path: string): Promise<T | null> {
	const res = await client.get<StrapiSingleResponse<T>>(path);
	return res.data.data ?? null;
}

async function getCollection<T>(path: string): Promise<T[]> {
	const res = await client.get<StrapiCollectionResponse<T>>(path);
	return res.data.data ?? [];
}

export async function fetchContent(locale: string): Promise<ContentBundle> {
	const encodedLocale = encodeURIComponent(locale);
	const collectionSuffix = `sort=order:asc&pagination[pageSize]=100`;

	const [homePage, hero, about, stackCategories, projects, experiences, contacts] =
		await Promise.all([
			getSingle<StrapiHomePage>(`/api/home-page?locale=${encodedLocale}`),
			getSingle<StrapiHero>(
				`/api/hero?locale=${encodedLocale}&populate[picture]=true&populate[buttons][populate]=*`,
			),
			getSingle<StrapiAbout>(
				`/api/about?locale=${encodedLocale}&populate[traits]=true`,
			),
			getCollection<StrapiStackCategory>(
				`/api/stack-categories?locale=${encodedLocale}&${collectionSuffix}`,
			),
			getCollection<StrapiProject>(
				`/api/projects?locale=${encodedLocale}&populate[links]=true&${collectionSuffix}`,
			),
			getCollection<StrapiExperience>(
				`/api/experiences?locale=${encodedLocale}&${collectionSuffix}`,
			),
			getCollection<StrapiContact>(`/api/contacts?${collectionSuffix}`),
		]);

	return {
		homePage,
		hero,
		about,
		stackCategories,
		projects,
		experiences,
		contacts,
	};
}

export function mediaUrl(media: StrapiMedia | null | undefined): string | null {
	if (!media?.url) return null;
	if (/^https?:\/\//.test(media.url)) return media.url;
	return `${STRAPI_BASE_URL}${media.url}`;
}
