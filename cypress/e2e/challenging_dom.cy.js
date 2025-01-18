describe('Challenging DOM Tests', () => {
  beforeEach(() => {
    // Proveri dostupnost stranice i poseti je pre svakog testa
    cy.request('https://the-internet.herokuapp.com/challenging_dom').then((response) => {
      expect(response.status).to.eq(200); // Proveri HTTP status
    });
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  });

  it('Clicks on all three main buttons using custom command', () => {
    // Testiranje glavnih dugmadi
    cy.clickAndCheckVisible('.button');
    cy.clickAndCheckVisible('.button.alert');
    cy.clickAndCheckVisible('.button.success');
  });

  it('Clicks on all Edit buttons and verifies actions using custom command', () => {
    // Klik na sva "Edit" dugmad pomoću prilagođene komande
    cy.clickAndCheckVisible('a[href="#edit"]');
  });

  it('Clicks on all Delete buttons and verifies actions using custom command', () => {
    // Klik na sva "Delete" dugmad pomoću prilagođene komande
    cy.clickAndCheckVisible('a[href="#delete"]');
  });
});