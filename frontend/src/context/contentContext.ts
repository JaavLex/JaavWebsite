import { createContext } from 'react';
import type { ContentBundle } from '../types/strapi';

export type ContentStatus = 'loading' | 'ready' | 'error';

export interface ContentContextValue {
	status: ContentStatus;
	data: ContentBundle | null;
	error: Error | null;
	refetch: () => void;
}

export const ContentContext = createContext<ContentContextValue | null>(null);
