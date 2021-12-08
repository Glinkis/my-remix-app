import { CatchBoundaryComponent, ErrorBoundaryComponent } from "@remix-run/react/routeModules"
import { LinksFunction, MetaFunction, NavLink } from "remix"
import { ScrollRestoration, useCatch, Meta, Links, Scripts, LiveReload, Outlet } from "remix"

import globalStylesUrl from "./styles/global.css"
import rootStylesUrl from "./styles/root.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: rootStylesUrl },
    { rel: "icon", href: "/favicon.png", type: "image/png" },
  ]
}

export const meta: MetaFunction = () => {
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
      <CaughtError>
        <h1>{caught.status}</h1>
        <p>{caught.statusText}</p>
      </CaughtError>
    </Document>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Document>
      <CaughtError>
        <h1>{error.name}</h1>
        <p>{error.message}</p>
      </CaughtError>
    </Document>
  )
}

interface CaughtErrorProps {
  children: React.ReactNode
}

function CaughtError({ children }: CaughtErrorProps) {
  // return styled error page
  return <div className="error">{children}</div>
}

interface DocumentProps {
  children: React.ReactNode
}

function Document({ children }: DocumentProps) {
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
