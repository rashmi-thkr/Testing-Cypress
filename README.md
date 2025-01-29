**Overview

This repository contains the project files along with the test cases for end-to-end (E2E) testing.

Folder Structure

project-root/
│── cypress/
│   ├── e2e/
│   │   ├── Pages/
│   │   │   ├── loginPage.js
│   │   ├── [Test case files]
│   ├── [Other Cypress configurations]
│── [Other project files]

Test Files
All test case files are located inside the e2e folder.

Pages Folder
The Pages folder contains reusable page object files for test automation.

Running Tests
To execute the test cases, follow these steps:
Install dependencies:
npm install

Open Cypress:
npx cypress open

Run tests in the Cypress Test Runner.
npx cypress run
