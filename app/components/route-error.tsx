import stylesUrl from "./route-error.styles.css"

export { stylesUrl as routeErrorStyles }

type Props = {
  error: Error
}

export default function RouteError({ error }: Props) {
  return (
    <div className="center-content">
      <section className="error">
        <h1 className="title">App Error</h1>
        <p className="message">{error.message}</p>
      </section>
    </div>
  )
}
