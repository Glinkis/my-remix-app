import { MetaFunction, useLoaderData, HeadersFunction } from "remix"

export const meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "The landing page!",
  }
}

export const headers: HeadersFunction = () => {
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
