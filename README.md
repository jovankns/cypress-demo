# Cypress Demo Project
This is a demo Cypress project created as part of a QA automation challenge for Assert QA.

## Project Description
The project contains automated tests for the following scenarios:
1. Clicking on three main buttons (`foo`, `qux`, `baz`) and verifying their state.
2. Clicking on all "Edit" and "Delete" buttons in a table and verifying their state.

The tests are designed with Cypress best practices, including the use of custom commands, reusable locators, and Mocha hooks.

## Features
- Custom commands for reusable actions (e.g., `clickAndCheckVisible`).
- Integration of Mocha hooks (`beforeEach`) for setup tasks.
- Validation of page availability using `cy.request`.
- Stable locators for robust test execution.
- Detailed logging for easier debugging.

## Prerequisites
- **Node.js**: Version 16 or later
- **Cypress**: Version 14 or later

## Setup Instructions
1. Clone this repository:
   git clone https://github.com/jovankns/cypress-demo.git

2. Navigate to the project directory:
cd cypress-demo

3. Install dependencies:
npm install

4. Open Cypress GUI:
    npx cypress open
    Run tests from the GUI.

5. File Structure
cypress-demo/
├── cypress/
│   ├── e2e/
│   │   └── challenging_dom.cy.js   # Test cases
│   ├── support/
│   │   └── commands.js            # Custom Cypress commands
├── node_modules/                  # Project dependencies (ignored by .gitignore)
├── cypress.config.js              # Cypress configuration file
├── package.json                   # Project configuration
├── package-lock.json              # Dependency tree
├── README.md                      # Project documentation

## Tests Overview
1. Main Buttons
    Tests the buttons with dynamic behavior (foo, qux, baz).
    Verifies that each button is clickable and remains visible after interaction.

2. Table Buttons ("Edit" and "Delete")
    Iterates over all "Edit" and "Delete" buttons in the table.
    Clicks each button and verifies that the buttons remain visible and functional.

## How to Run Tests:
1. Run all tests using Cypress GUI:
npx cypress open
Select the challenging_dom.cy.js file to run all test cases.

2. Run tests in headless mode (for CI/CD pipelines):
npx cypress run