import { MutableRefObject, useContext, useEffect } from 'react';
import { ObserverContext } from '@/app/provider';

export default function useRefObserver(observerRef: MutableRefObject<null>) {
  const { observer } = useContext(ObserverContext);

  return useEffect(() => {
    if (!observerRef.current || !observer) return;

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [observer, observerRef]);
}
