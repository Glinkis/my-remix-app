import { ErrorBoundaryComponent } from "remix"
export { default as routeErrorStyles } from "./route-error.styles.css"

export const RouteError: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div className="center-content">
      <section className="error">
        <h1 className="title">{error.name}</h1>
        <p className="message">{error.message}</p>
      </section>
    </div>
  )
}
