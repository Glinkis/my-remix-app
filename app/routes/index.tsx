import type { MetaFunction, LinksFunction } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

export default function Index() {
  return (
    <main>
      <h1>Welcome to Remix!</h1>
      <h2>This is just the beginning.</h2>
    </main>
  )
}
