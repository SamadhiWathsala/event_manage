# **Event Manage API**

Simple flutter application & backend api for listing and filtering out events.

## **Setup guide**  

1. Clone this repo

  ```bash
    git clone <github-url>
  ```

2. Install dependencies

  ```javascript
    yarn add
  ```

3. Start the development server

  ```javascript
    yarn start
  ```

### environment variables  

```text
  MONGODB_URI=<YOUR-MONGODB-CONNECTION-STRING>
```

### Setup ngrok tunnel  

For development purposes, I just expose the local dev server through *[ngrok](https://ngrok.com/)* tunnel. Please download and setup ngrok to connect this backend to mobile app.

Then run following command for start the ngrok tunnel

```bash
  ngrok http 5000
```
