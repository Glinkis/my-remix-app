import type { MetaFunction, LinksFunction, LoaderFunction } from "remix"

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

export default function Index() {
  return (
    <>
      <header>Header</header>
      <main>
        <h1>Welcome to Remix!</h1>
        <h2>This is just the beginning.</h2>
      </main>
      <footer>Footer</footer>
    </>
  )
}
