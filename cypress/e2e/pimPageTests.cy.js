///<reference types="cypress"/>

import { LoginPage } from "./Pages/loginPage"

const lpObject = new LoginPage()  //Login Page Object

describe('Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        lpObject.enterUsername("Admin")
        lpObject.enterPassword("admin123")
        lpObject.enterLoginBtn()
    })


    it('PIM Page Test-1', () => {
       
            cy.get('.oxd-brand-banner > img').should('be.visible') //OrangeHRM banner image visibility
            .log('Login Successful') //else Message
            cy.get('.oxd-main-menu-search > .oxd-icon-button').should('exist') //arrow icon

            cy.get(':nth-child(2) > .oxd-main-menu-item').click()  //PIM button in Menu bar
            cy.url().should('include','/pim/viewEmployeeList')
            cy.get('.oxd-topbar-header-title').should('exist')
            cy.get('.oxd-glass-button').should('exist')
            cy.get('.oxd-userdropdown-tab').should('exist')

            cy.get('.oxd-topbar-body').should('contain','Configuration').and('contain','Employee List').and('contain','Add Employee').and('contain','Reports')
            cy.contains('Employee Name').should('exist')
            cy.contains('Employee Id').should('exist')
            cy.contains('Include').should('exist')
            cy.contains('Employment Status').should('exist')
            cy.contains('Supervisor Name').should('exist')
            cy.contains('Job Title').should('exist')
            cy.contains('Sub Unit').should('exist')
            cy.contains('Reset').should('exist')
            cy.contains('Search').should('exist')


        })

    it('Add Button Test-2', () =>{
            cy.get('.orangehrm-header-container > .oxd-button').click()  // ADD button
            cy.contains('Add Employee').should('exist')
            cy.url().should('contain','/pim/addEmployee')

            cy.contains('Employee Full Name').should('exist')
            cy.contains('Employee Id').should('exist')
            cy.contains('Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px').should('exist')
            cy.contains('Create Login Details').should('exist')

            cy.contains('Cancel').should('exist')
            cy.contains('Save').should('exist')
           
        })

})
