import ReactDOMServer from "react-dom/server"
import type { EntryContext } from "remix"
import { RemixServer } from "remix"
import prettier from "prettier"

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup =
    "<!DOCTYPE html>" +
    ReactDOMServer.renderToString(
      <RemixServer context={remixContext} url={request.url} />
    )

  if (process.env.NODE_ENV !== "production") {
    // Serve a pretty version of the HTML in development.
    markup = prettier.format(markup, {
      parser: "html",
      htmlWhitespaceSensitivity: "ignore",
    })
  }

  responseHeaders.set("Content-Type", "text/html")

  return new Response(markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
