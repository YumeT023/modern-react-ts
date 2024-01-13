describe("Proplate generated e2e testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should bootstrap the project correctly", () => {
    // '$project_name' being a dynamic var
    cy.contains("$project_name works");
  });
});
