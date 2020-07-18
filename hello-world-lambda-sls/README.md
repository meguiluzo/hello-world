# hello-world-lambda-sls

This is a basic hello world using:

- Serverless
- Aws SDK

## How to use

### Run the application

```(shell)
npm run sls-server:start   #Run the api offline
npm run sls-client:start   #Run the client to invoke api
```

### Debug the application

#### Debug the API

1. Run the api offline listening for a debugger to attach.

   ```(shell)
    npm run sls-server:debug
   ```

2. Use VSCode Launch Configuration "Attach SLS Server Debug" to attach a debugger.

#### Debug the client

1. Run the client listening for a debugger to attach.

   ```(shell)
    npm run sls-client:debug
   ```

2. Use VSCode Launch Configuration "Attach SLS Client Debug" to attach a debugger.
