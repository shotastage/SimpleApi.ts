# Simple API Client

Super minimum lightweight API client for node application written in TypeScript.

## Usage

```
 ApiClient.get("https://entry-point.com/api/v1/sample", [["HTTP_HEADER_1", "HEADER_VALUE"]])
   .then((data) => {
      setContent(data.contents);
   });
```
