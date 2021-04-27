This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It is intended as a minimal project to recreate this issue: [https://github.com/vercel/next.js/issues/24532](https://github.com/vercel/next.js/issues/24532).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reproducing the Error

Once you have opened [http://localhost:3000](http://localhost:3000), follow these steps:

1. Click on "Open Search Page with Query".
2. Click on "Go to Anchor".
3. Click on "Go to Home Page".
4. Press your browser's back button.

The Search Page will appear, but this time instead of "Query: `foo`" it will say, "No query value!"
