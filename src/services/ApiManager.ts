import user from "../mocks/user.json";

export default class ApiManager {
  public static login = (login: string, password: string): Promise<Response> => {
    return new Promise<Response>((resolve) => {
      const value = {
        user,
        token_type: "Bearer",
        access_token: "example",
      };

      const response = new Response(JSON.stringify(value), {
        status: 200,
      });

      resolve(response);
    });
  };
}
