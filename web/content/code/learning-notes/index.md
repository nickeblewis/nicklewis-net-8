# NextJS

I felt that I need to learn this sausage...

https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

* Webpack
* code splitting

* page-based routing, SSG (static site generation) and SSR (server-side rendering)
* client-side routing and optimised prefetching
* Built-in CSS and SASS support and support for any CSS-in-JS library
* Dev env for fast refresh support
* API routes to build API endpoints with Serverless Functions
* Fully extendable

https://nextjs.org/learn/basics/create-nextjs-app/setup

* Node should be at least 10.13 (mine is 12.18.0)

```bash
npm init next-app nextjs-blog
```

Then

```bash
cd nextjs-blog
npm run dev
```

Is all that is required to get started.

# AWS Lambda, Serverless & Node via EggHead

https://egghead.io/lessons/aws-setup-the-serverless-framework

* created a temporary folder called my-app
* aws configure -> to add an authenticated user
* npm i serverless
* serverless -h
* sls -h
* touch serverless.yml

```yaml
service: my-app

provider:
    name: aws
    runtime: nodejs12

functions:
    helloWorld:
        handler: handler.run
```

* touch handler.js

```js
module.exports.run (event) => {
    return Promise.resolve("Hello");
}
```

* sls deploy

Resulted in an error regarding Node version



# AWS CDK

Next on the list
