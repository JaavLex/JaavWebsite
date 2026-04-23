import { useContext } from 'react';
import { ContentContext, type ContentContextValue } from './contentContext';

export function useContent(): ContentContextValue {
	const ctx = useContext(ContentContext);
	if (!ctx) throw new Error('useContent must be used inside ContentProvider');
	return ctx;
}
