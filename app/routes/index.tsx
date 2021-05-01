import type { MetaFunction, LinksFunction, LoaderFunction } from "remix"
import { useRouteData } from "remix"

import stylesUrl from "../styles/index.css"

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎" }
}

export default function Index() {
  let data = useRouteData()

  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1>Welcome to Remix!</h1>
    </main>
  )
}
