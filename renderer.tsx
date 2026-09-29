import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>أحمد الطراوي | أخصائي تسويق</title>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%2317110E'/%3E%3Crect x='10' y='10' width='12' height='12' fill='%23B5452A' transform='rotate(45 16 16)'/%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@200;300;400;500;600;700;800&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
