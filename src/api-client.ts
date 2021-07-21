export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT'
} as const;
type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];


const xhrRequest = (entry: string, method: HttpMethod) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, entry);
  xhr.send();
  xhr.onload = ()=> {
    console.log(xhr.response);
  };
};

export class ApiClient {
  static requestAPI<T>(entry: string, method: HttpMethod, headers: any, body: any, func: any): Promise<T> {
    return new Promise(() => {
      xhrRequest(entry, method);
    });
  }
}
