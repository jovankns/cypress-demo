
describe('Challenging DOM Tests', () => {
  beforeEach(() => {
    // Proveri da API vraća status 200 i poseti stranicu
    cy.request('/challenging_dom').then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.visit('/challenging_dom');
  });

  it('Clicks each main button and verifies canvas number changes', () => {
    // Dohvati početni broj sa canvasa
    cy.getCanvasNumber().then((currentNumber) => {
      cy.log(`Current number: ${currentNumber}`);
      
		const buttons = ['.button', '.button.alert', '.button.success'];

		// Iteriraj kroz dugmad i primeni komande
		cy.wrap(buttons).each((selector) => {
		  cy.clickButton(selector); // Klikni na dugme
		  cy.getCanvasNumber().then((newNumber) => {
			cy.verifyNumbersAreDifferent(currentNumber, newNumber); // Proveri da su brojevi različiti
			currentNumber = newNumber; // Ažuriraj broj za sledeći ciklus
		  });
		});
    });
  });

	it('Clicks on all buttons in a table (Edit/Delete)', () => {
		const buttons = ['#edit', '#delete'];
		cy.wrap(buttons).each((action) => {
		  cy.get(`a[href="${action}"]`).each(($btn) => {
			// Click the button
			cy.clickButton($btn);

			// Verify the button still exists after clicking
			cy.wrap($btn).should('exist');
		  });
		});
	});
});


