const TOKEN_KEY = "token";

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};
