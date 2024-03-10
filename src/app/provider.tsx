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
                console.log(entry.target.id);
                document
                  .getElementById(entry.target.id + '-bullet')
                  ?.classList.add('min-w-10', 'min-h-10', 'bg-slate-400');
              } else {
                document
                  .getElementById(entry.target.id + '-bullet')
                  ?.classList.remove('min-w-10', 'min-h-10', 'bg-slate-400');
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
