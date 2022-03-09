# Simple API Client

Super minimum lightweight API client for node application written in TypeScript.

## Usage

```
 ApiClient.GET("https://entry-point.com/api/v1/sample", [["HTTP_HEADER_1", "HEADER_VALUE"]])
   .then((data: any) => {
      setContent(data.contents);
   });
```
