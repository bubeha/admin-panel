import AuthStore from "./AuthStore";
import ExampleApiManager from "../services/ExampleApiManager";

const apiManager = new ExampleApiManager();

export interface IAppStore {
  authStore: AuthStore;
}

export const appStore: IAppStore = {
  authStore: new AuthStore(apiManager),
};
