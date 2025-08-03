import { Placeholder } from "../Placeholder"

describe("Component Tests", () => {
  it("should render the Placeholder component correctly", () => {
    cy.mount(<Placeholder />)

    cy.get("h1").should("contain.text", "Welcome to the Placeholder Component")
    cy.get("p").should("contain.text", "This is a simple placeholder component.")
  })
})
