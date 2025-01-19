// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Command to retrieve the number from the canvas by calling the `/challenging_dom` API
Cypress.Commands.add('getCanvasNumber', () => {
  return cy.request('/challenging_dom').then((response) => {
	// Extract the number from the response using a regular expression
    const match = response.body.match(/canvas\.strokeText\('Answer: (\d+)'/);
    expect(match).to.not.be.null; // Verify that the number exists
    return cy.wrap(parseInt(match[1], 10)); // Return the number wrapped in a Cypress chain
  });
});

// Command to compare two numbers and ensure they are different
 Cypress.Commands.add('verifyNumbersAreDifferent', (previousNumber, newNumber) => {
  cy.log(`Comparing numbers: ${previousNumber} and ${newNumber}`);
  expect(newNumber).to.not.eq(previousNumber); // Verify that the numbers are different
});

// Command to check if a button is visible and enabled, then click on it
Cypress.Commands.add('clickButton', (selector) => {
  return cy.get(selector).first()
  .should('be.visible')
  .and('not.be.disabled')
  .click();
});