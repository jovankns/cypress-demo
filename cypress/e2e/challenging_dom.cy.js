
describe('Challenging DOM Tests', () => {
  beforeEach(() => {
    // Verify that the API returns a 200 status and visit the page
    cy.request('/challenging_dom').then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.visit('/challenging_dom');
  });

  it('Clicks each main button and verifies canvas number changes', () => {
    // Retrieve the initial number from the canvas
    cy.getCanvasNumber().then((currentNumber) => {
      cy.log(`Current number: ${currentNumber}`);
      
		const buttons = ['.button', '.button.alert', '.button.success'];

		// Iterate through the buttons and apply commands
		cy.wrap(buttons).each((selector) => {
		  cy.clickButton(selector); // Click the button
		  cy.getCanvasNumber().then((newNumber) => {
			cy.verifyNumbersAreDifferent(currentNumber, newNumber); // Verify that the numbers are different
			currentNumber = newNumber; // Update the current number for the next iteration
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


