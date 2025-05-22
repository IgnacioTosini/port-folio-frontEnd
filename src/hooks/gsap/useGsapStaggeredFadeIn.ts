import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

export function useGsapStaggeredFadeIn<T extends HTMLElement = HTMLElement>(
    refs: RefObject<(T | null)[]>,
    deps: unknown[] = [],
    options?: {
        y?: number;
        stagger?: number;
        duration?: number;
        ease?: string;
    }
) {
    useEffect(() => {
        const elements = refs.current?.filter(Boolean) ?? [];
        if (elements.length) {
            gsap.from(elements, {
                opacity: 0,
                y: options?.y ?? 40,
                stagger: options?.stagger ?? 0.12,
                duration: options?.duration ?? 0.6,
                ease: options?.ease ?? 'power2.out',
                clearProps: 'all',
            });
        }
        return () => {
            if (elements.length) {
                gsap.set(elements, { clearProps: 'all' });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
