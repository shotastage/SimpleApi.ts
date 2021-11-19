export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
} as const;
type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

class ApiClient {
  static GET<T>(entry: string, headers: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.GET, headers);
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

  static requestAPI<T>(entry: string, method: HttpMethod, headers?: string[][], body?: any): Promise<T> {
    return new Promise((resolve, reject) => {

      // XMLHttpRequest instance
      const xhr = new XMLHttpRequest();

      // Initialize request
      xhr.open(method, entry);

      headers?.forEach((header: string[]) => {
        xhr.setRequestHeader(header[0], header[1]);
      });

      xhr.responseType = 'json';

      // Send request
      body ? xhr.send(body) : xhr.send();

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
    });
  }
}

export default ApiClient;
