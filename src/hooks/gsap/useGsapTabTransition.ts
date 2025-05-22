import type { RefObject } from 'react';
import gsap from 'gsap';

export function useGsapTabTransition<T extends HTMLElement = HTMLDivElement>(
    tabContentRef: RefObject<T>,
    setActiveTab: (tab: 'autoridades' | 'historia') => void
) {
    function handleTabChange(tab: 'autoridades' | 'historia') {
        if (tabContentRef.current) {
            gsap.to(tabContentRef.current, {
                opacity: 0,
                y: -30,
                duration: 0.3,
                onComplete: () => {
                    setActiveTab(tab);
                    gsap.fromTo(
                        tabContentRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                    );
                }
            });
        } else {
            setActiveTab(tab);
        }
    }
    return handleTabChange;
}
