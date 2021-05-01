import {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  useMatches,
} from "remix"
import { Meta, Links, Scripts, useRouteData, LiveReload } from "remix"
import { Outlet } from "react-router-dom"

import stylesUrl from "./styles/global.css"

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

function Document({ children }: { children: React.ReactNode }) {
  let matches = useMatches()

  // If at least one route wants to hydrate, this will return true
  let includeScripts = matches.some((match) => match.handle?.hydrate)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        {includeScripts && <Scripts />}

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <main>
        <Outlet />
      </main>
    </Document>
  )
}

export let ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Document>
      <div className="center-content">
        <section className="error">
          <h1 className="title">App Error</h1>
          <p className="message">{error.message}</p>
        </section>
      </div>
    </Document>
  )
}
