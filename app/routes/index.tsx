import { MetaFunction, useLoaderData, HeadersFunction } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "The landing page!",
  }
}

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": "public, max-age=120",
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
