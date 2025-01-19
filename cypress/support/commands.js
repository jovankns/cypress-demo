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

// Komanda koja uhvati broj sa canvasa pozivajući API `/challenging_dom`
Cypress.Commands.add('getCanvasNumber', () => {
  return cy.request('/challenging_dom').then((response) => {
	// Ekstraktuje broj iz odgovora koristeći regularni izraz
    const match = response.body.match(/canvas\.strokeText\('Answer: (\d+)'/);
    expect(match).to.not.be.null; // Provera da broj postoji
    return cy.wrap(parseInt(match[1], 10)); // Vraćanje kroz Cypress wrap
  });
});

 // Komanda koja poredi dva broja i osigurava da nisu isti
 Cypress.Commands.add('verifyNumbersAreDifferent', (previousNumber, newNumber) => {
  cy.log(`Comparing numbers: ${previousNumber} and ${newNumber}`);
  expect(newNumber).to.not.eq(previousNumber); // Proverava da su brojevi različiti
});

// Komanda koja proverava da li je dugme vidljivo i aktivno, pa zatim klikne na njega
Cypress.Commands.add('clickButton', (selector) => {
  return cy.get(selector).first()
  .should('be.visible')
  .and('not.be.disabled')
  .click();
});