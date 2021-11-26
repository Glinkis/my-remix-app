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

  responseHeaders.set("ETag", etag(markup))
  responseHeaders.set("Content-Type", "text/html")

  if (request.headers.get("If-None-Match") === responseHeaders.get("ETag")) {
    return new Response("", {
      status: 304,
      headers: responseHeaders,
    })
  }

  return new Response(markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}

export let handleDataRequest: HandleDataRequestFunction = async (
  response,
  { request }
) => {
  let body = await response.text()

  if (request.method.toLowerCase() === "get") {
    response.headers.set("etag", etag(body))

    if (request.headers.get("If-None-Match") === response.headers.get("ETag")) {
      return new Response("", {
        status: 304,
        headers: response.headers,
      })
    }
  }

  return response
}
