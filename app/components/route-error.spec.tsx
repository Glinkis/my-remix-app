import { mount } from "@cypress/react"
import { RouteError } from "./route-error"

it("renders the route error", () => {
  const error1 = new Error("Oh no!")
  mount(<RouteError error={error1} />)
  cy.findByText(error1.name).should("exist")
  cy.findByText(error1.message).should("exist")

  const error2 = new TypeError("Oh sweet Jesus!")
  mount(<RouteError error={error2} />)
  cy.findByText(error2.name).should("exist")
  cy.findByText(error2.message).should("exist")
})
