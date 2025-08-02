import { useEffect, useRef } from 'react';

type UseClickOutsideProps = {
	onClickOutside: () => void;
};

export function useClickOutside<T extends HTMLElement>({ onClickOutside }: UseClickOutsideProps) {
	const ref = useRef<T>(null);

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		}

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [onClickOutside]);

	return ref;
}
