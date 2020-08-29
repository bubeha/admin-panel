import { action, observable } from "mobx";
import { User } from "../models/User";
import { setToken } from "../helpers/auth";
import ApiManager from "../services/ApiManager";

export default class AuthStore {
  @observable private _user: User | null = null;

  get user(): User | null {
    return this._user;
  }

  @action login = (login: string, password: string): Promise<Response> => {
    return ApiManager.login(login, password).then(async (response: Response) => {
      const data = await response.json();

      this._user = data.user;

      setToken(`${data.token_type} ${data.access_token}`);

      return response;
    });
  };
}
