import { mount } from "@cypress/react"
import { RouteError } from "./route-error"

describe("RouteError", () => {
  it("renders the route error", () => {
    const error = new Error("Oh no!")
    mount(<RouteError error={error} />)
    cy.findByText(error.message).should("exist")
  })
})
