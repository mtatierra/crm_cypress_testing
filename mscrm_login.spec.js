describe("Microsoft Dynamics CRM Test Suite", () => {
    beforeEach(() => {
      cy.ntlm("https://your-mscrm-url.com", "username", "password", "domain");
      cy.visit("https://your-mscrm-url.com");
    });
  
    it("should log in successfully", () => {
      // Replace the selectors with the actual selectors for your CRM application
      cy.get("#username-input").type("your-username");
      cy.get("#password-input").type("your-password");
      cy.get("#login-button").click();
  
      // Replace the selector with the actual selector for an element that indicates a successful login
      cy.get("#welcome-message").should("be.visible");
    });
  
    it("should perform another action", () => {
      // Add more test commands here
    });
  });
      