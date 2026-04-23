import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { fetchContent } from '../lib/strapi';
import type { ContentBundle } from '../types/strapi';
import { ContentContext } from './contentContext';

type ContentState =
	| { status: 'loading'; data: null; error: null }
	| { status: 'ready'; data: ContentBundle; error: null }
	| { status: 'error'; data: null; error: Error };

interface Props {
	locale: string;
	children: ReactNode;
}

export function ContentProvider({ locale, children }: Props) {
	const [state, setState] = useState<ContentState>({
		status: 'loading',
		data: null,
		error: null,
	});
	const [epoch, setEpoch] = useState(0);

	const refetch = useCallback(() => setEpoch(e => e + 1), []);

	useEffect(() => {
		let cancelled = false;
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setState({ status: 'loading', data: null, error: null });

		fetchContent(locale)
			.then(data => {
				if (cancelled) return;
				setState({ status: 'ready', data, error: null });
			})
			.catch((err: unknown) => {
				if (cancelled) return;
				setState({
					status: 'error',
					data: null,
					error: err instanceof Error ? err : new Error(String(err)),
				});
			});

		return () => {
			cancelled = true;
		};
	}, [locale, epoch]);

	return (
		<ContentContext.Provider
			value={{
				status: state.status,
				data: state.data,
				error: state.error,
				refetch,
			}}
		>
			{children}
		</ContentContext.Provider>
	);
}
