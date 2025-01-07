import { useEffect, useState } from 'react';
import { getToken } from '../services/token';

const usePetFinderToken = (): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const newToken = await getToken();
        setToken(newToken);
        localStorage.setItem('petFinderToken', newToken);
      } catch (error) {
        console.error('Error fetch token', error);
      }
    };
    fetchToken();
  }, []);
  return token;
};

export default usePetFinderToken;
