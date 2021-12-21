# Nest + Fastify + AsyncLocalStorage middlewares

This demonstrates that middlewares are not working if `fastify` is installed as 
a regular dependency. When it is removed from `package.json`, after reinstall 
the middleware starts to work, for both GET and POST requests.

```bash
yarn
yarn start
curl localhost:3000
# fails to get the ID from ALS if there is actual payload
curl -d '{}' localhost:3000
# without the payload it will work fine (even for post request)
curl -X POST localhost:3000
```

Calling GET (or POST without payload) several times will log:

```
In Middleware with id 0
get 0
In Middleware with id 1
get 1
In Middleware with id 2
get 2
```

Calling POST with payload:

```
In Middleware with id 0
post undefined
In Middleware with id 1
post undefined
In Middleware with id 2
post undefined
```
