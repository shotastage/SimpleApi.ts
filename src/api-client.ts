export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
} as const;
type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

const xhrRequest = (entry: string, method: HttpMethod, body?: DataView) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, entry);
  xhr.send();
  xhr.onload = ()=> {
    console.log(xhr.response);
  };
};

export class ApiClient {
  static GET<T>(entry: string, headers: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.GET, headers, {});
  }

  static POST<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.POST, headers, body);
  }

  static PUT<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.PUT, headers, body);
  }

  static DELETE<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.DELETE, headers, body);
  }

  static PATCH<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.PATCH, headers, body);
  }

  static requestAPI<T>(entry: string, method: HttpMethod, headers: any, body: any): Promise<T> {
    return new Promise(() => {
      xhrRequest(entry, method);
    });
  }
}
