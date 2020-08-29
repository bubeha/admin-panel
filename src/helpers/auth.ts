const TOKEN_KEY = "token";

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (value: string): void => {
  return localStorage.setItem(TOKEN_KEY, value);
};
