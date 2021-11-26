import { ErrorBoundaryComponent, LinksFunction, MetaFunction, useCatch } from "remix"
import { Meta, Links, Scripts, LiveReload, Outlet } from "remix"

import stylesUrl from "./styles/global.css"
import { CatchBoundaryComponent } from "@remix-run/react/routeModules"

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
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
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
