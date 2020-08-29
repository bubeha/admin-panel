import AuthStore from "./AuthStore";

export interface IAppStore {
  authStore: AuthStore;
}

export const appStore: IAppStore = {
  authStore: new AuthStore(),
};
