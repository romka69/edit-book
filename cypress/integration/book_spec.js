describe("Edit-Book app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Visits a mainpage", () => {
    cy.contains("Edit-Book")
  })

  context("Title", () => {
    beforeEach(() => {
      cy.contains("Add title")
        .click()
        .get("input[name=text]")
        .type("Example title")
        .should("have.value", "Example title")

      cy.get('.px-3.border.border-gray-400.rounded')
        .contains("Add")
        .click()
    })

    it("Add", () => {
      cy.contains("Example title")
    })

    it("Undo", () => {
      cy.contains("Undo last action")
        .click()

      cy.get("Example title")
        .should("not.exist")
    })

    it("Toggle", () => {
      const checkboxTitle = cy.get("[type=checkbox]")
                              .first()
                              .click()

      checkboxTitle.check()

      checkboxTitle.not()
        .check()
    })
  })

  context("Subtitle", () => {
    beforeEach(() => {
      cy.contains("Add subtitle")
        .click()
        .get("input[name=text]")
        .type("Example subtitle")
        .should("have.value", "Example subtitle")

      cy.get('.px-3.border.border-gray-400.rounded')
        .contains("Add")
        .click()
    })

    it("Add", () => {
      cy.contains("Example subtitle")
    })

    it("Undo", () => {
      cy.contains("Undo last action")
        .click()

      cy.get("Example subtitle")
        .should("not.exist")
    })

    it("Toggle", () => {
      const checkboxSubtitle = cy.get("li ul li [type=checkbox]")
                                 .first()
                                 .click()

      checkboxSubtitle.check()

      checkboxSubtitle.not()
        .check()
    })
  })
})