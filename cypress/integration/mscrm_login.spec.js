describe("TodoMVC Test Suite", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should add a new todo item", () => {
      const todoText = "A new todo item";
  
      cy.get(".new-todo").type(todoText + "{enter}");
      cy.get(".todo-list li").should("have.length", 1).and("contain", todoText);
    });
  });
  