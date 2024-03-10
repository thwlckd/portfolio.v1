'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

interface ObserverContextProps {
  observer: IntersectionObserver | null;
}

export const ObserverContext = createContext<ObserverContextProps>({
  observer: null,
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    setObserver(
      () =>
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                document
                  .getElementById(entry.target.id + '-bullet')
                  ?.classList.add('active-bullet');
              } else {
                document
                  .getElementById(entry.target.id + '-bullet')
                  ?.classList.remove('active-bullet');
              }
            });
          },
          { threshold: 0.5 },
        ),
    );
  }, []);

  return (
    <ObserverContext.Provider
      value={{
        observer,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
};

export default Provider;
