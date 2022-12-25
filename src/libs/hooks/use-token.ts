import Cookies from 'js-cookie';

import { AUTH_TOKEN_KEY } from '@/libs/constants';

export function useToken() {
  return {
    setToken(token: string): void {
      Cookies.set(AUTH_TOKEN_KEY, token, { expires: 1 });
    },
    getToken(): string | undefined {
      return Cookies.get(AUTH_TOKEN_KEY);
    },
    removeToken(): void {
      Cookies.remove(AUTH_TOKEN_KEY);
    },
    hasToken(): boolean {
      const token = Cookies.get(AUTH_TOKEN_KEY);
      if (!token) return false;
      return true;
    },
  };
}
