import { RefObject, useEffect, useRef } from 'react';

type UseClickOutsideProps = {
	onClickOutside: () => void;
	toggleButtonRef?: RefObject<HTMLElement | null>;
};

export function useClickOutside<T extends HTMLElement>({
	onClickOutside,
	toggleButtonRef,
}: UseClickOutsideProps): React.RefObject<T | null> {
	const ref = useRef<T>(null);
	useEffect(() => {
		function handleClick(event: MouseEvent) {
			const target = event.target as Node | null;
			if (!target) return;

			const toggleEl = toggleButtonRef?.current as HTMLElement | null;
			if (toggleEl?.contains(target)) return;

			if (ref.current && !ref.current.contains(target)) {
				onClickOutside();
			}
		}

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [onClickOutside, toggleButtonRef]);

	return ref;
}
