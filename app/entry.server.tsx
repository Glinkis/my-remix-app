import ReactDOMServer from "react-dom/server"
import type { EntryContext, HandleDataRequestFunction } from "remix"
import { RemixServer } from "remix"
import etag from "etag"

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  if (request.headers.get("If-None-Match") === etag(markup)) {
    return new Response("", {
      status: 304,
      headers: responseHeaders,
    })
  }

  responseHeaders.set("ETag", etag(markup))
  responseHeaders.set("Content-Type", "text/html")

  return new Response(markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}

export let handleDataRequest: HandleDataRequestFunction = async (response, args) => {
  let body = await response.text()

  if (args.request.method.toLowerCase() === "get") {
    if (args.request.headers.get("If-None-Match") === etag(body)) {
      return new Response("", {
        status: 304,
        headers: response.headers,
      })
    }
  }

  response.headers.set("ETag", etag(body))

  return response
}
