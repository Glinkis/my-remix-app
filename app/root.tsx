import type { ErrorBoundaryComponent, LinksFunction, MetaFunction } from "remix"
import { Meta, Links, Scripts, LiveReload } from "remix"
import { Outlet } from "react-router-dom"

import stylesUrl from "./styles/global.css"
import { RouteError, routeErrorStyles } from "./components/route-error"

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: routeErrorStyles },
    { rel: "icon", href: "/favicon.png", type: "image/png" },
  ]
}

export let meta: MetaFunction = () => {
  return {
    viewport: "width=device-width, initial-scale=1",
  }
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Document>
      <RouteError error={error} />
    </Document>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
