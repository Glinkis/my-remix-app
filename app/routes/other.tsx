import type { MetaFunction } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Other",
    description: "More interesting content!",
  }
}

export default function Index() {
  return <main>Other page content</main>
}
