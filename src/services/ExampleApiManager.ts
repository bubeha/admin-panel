import user from "../mocks/user.json";
import { IApiManager } from "./IApiManager";

export default class ExampleApiManager implements IApiManager {
  private generateResponse(body: string | null, status: number) {
    return new Response(body, {
      status,
    });
  }

  public login(login: string, password: string): Promise<Response> {
    return new Promise<Response>((resolve) => {
      const body = {
        user,
        token_type: "Bearer",
        access_token: "example",
      };

      const response = this.generateResponse(JSON.stringify(body), 200);

      resolve(response);
    });
  }

  public loadCurrentUser(): Promise<Response> {
    return new Promise<Response>((resolve) => {
      const body = {
        ...user,
      };

      const response = this.generateResponse(JSON.stringify(body), 200);

      resolve(response);
    });
  }
}
