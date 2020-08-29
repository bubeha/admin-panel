export interface IApiManager {
  login: (login: string, password: string) => Promise<Response>;

  loadCurrentUser: () => Promise<Response>;
}
