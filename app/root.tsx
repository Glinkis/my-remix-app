import { CatchBoundaryComponent, ErrorBoundaryComponent } from "@remix-run/react/routeModules"
import { LinksFunction, MetaFunction, NavLink } from "remix"
import { Link, ScrollRestoration, useCatch, Meta, Links, Scripts, LiveReload, Outlet } from "remix"

import globalStylesUrl from "./styles/global.css"
import rootStylesUrl from "./styles/root.css"
import { useRef } from "react"

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: rootStylesUrl },
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

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch()
  return (
    <Document>
      <h1>{caught.status}</h1>
      <p>{caught.statusText}</p>
    </Document>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Document>
      <h1>{error.name}</h1>
      <p>{error.message}</p>
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
        <header>
          <NavLink to="/" prefetch="intent">
            Home
          </NavLink>
          <NavLink to="/other" prefetch="intent">
            Other
          </NavLink>
        </header>
        {children}
        <footer>Footer</footer>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <ScrollRestoration />
      </body>
    </html>
  )
}
