// components/FadeInSection.jsx
import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, threshold = 0.1, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // opcional: desconectar depois de ver (mantém animação apenas uma vez)
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(node);

        return () => {
            try {
                observer.disconnect();
            } catch {
                // ignore
            }
        };
    }, [threshold]);

    const content =
        typeof children === 'function' ? children(isVisible) : children;

    return (
        <div
            ref={ref}
            className={`${className} transition-opacity duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {content}
        </div>
    );
};

export default FadeInSection;