export const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
} as const;
type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

class ApiClient {
  static get<T>(entry: string, headers: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.GET, headers);
  }

  static post<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.POST, headers, body);
  }

  static put<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.PUT, headers, body);
  }

  static delete<T>(entry: string, headers: any, body: any): Promise<T> {
    return this.requestAPI(entry, HttpMethod.DELETE, headers, body);
  }

  static patch<T>(entry: string, headers: any, body: any): Promise<T> {
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

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState !== 4) {
          return;
        }

        if (xhr.status === 200) {
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
