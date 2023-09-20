import { useCallback, useState } from 'react';
import { ApiResponse } from './types';

type UseSearchDictionaryApiResult = {
  fetchDefinition: (searchInput: string) => void;
  data?: ApiResponse;
  loading: boolean;
  error?: Error;
};

export const useSearchDictionaryApi = (): UseSearchDictionaryApiResult => {
  const [data, setData] = useState<ApiResponse | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchDefinition = useCallback((searchInput: string) => {
    if (!searchInput) {
      return;
    }

    setLoading(true);
    setData(undefined);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { fetchDefinition, data, loading, error };
};
