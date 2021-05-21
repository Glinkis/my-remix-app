import stylesUrl from "./route-error.styles.css"

export { stylesUrl as routeErrorStyles }

type Props = {
  error: Error
}

export function RouteError({ error }: Props) {
  return (
    <div className="center-content">
      <section className="error">
        <h1 className="title">{error.name}</h1>
        <p className="message">{error.message}</p>
      </section>
    </div>
  )
}
