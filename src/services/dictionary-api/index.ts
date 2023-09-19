import { useEffect, useState } from 'react';

export const useSearchDictionaryApi = (searchInput: string) => {
  const [data, setData] = useState<Response | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!searchInput) {
      return;
    }

    setLoading(true);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [searchInput]);

  return { data, loading, error };
};
