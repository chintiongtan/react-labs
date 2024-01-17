This project explores different data fetching and rendering approaches in React, and how each of them contributes to [request waterfall][request-waterfall].

## Getting Started

First, run the development server from the project root directory:

```bash
docker compose run -ti --rm app yarn workspace request-waterfall dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

1. **Fetch-on-Render**
   * Data fetching is triggered by the component's lifecycle (e.g. when a component is mounted)
   * Not recommended because it leads to request waterfall

1. **Fetch-Then-Render**
   * Data fetching is done as early as possible, all promises must be resolved before rendering the new screen

1. **Render-as-You-Fetch**
   * Data fetching is done as early as possible, immediately render a fallback if the data fetching is not completed

## References

- https://17.reactjs.org/docs/concurrent-mode-suspense.html
- https://blog.sentry.io/fetch-waterfall-in-react/

[request-waterfall]: https://tanstack.com/query/latest/docs/react/guides/request-waterfalls#:~:text=A%20request%20waterfall%20is%20what,Consider%20a%20web%20page.
