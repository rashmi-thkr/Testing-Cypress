///<reference types="cypress"/>

import { LoginPage } from "./Pages/loginPage"

const lpObject = new LoginPage()  //Login Page Object

describe('Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
        lpObject.enterUsername("Admin")
        lpObject.enterPassword("admin123")
        lpObject.enterLoginBtn()
    })


    it('Admin Page Test-1', () => {     

            cy.get('.oxd-brand-banner > img').should('be.visible') //OrangeHRM banner image visibility
            .log('Login Successful') //else Message
            cy.get('.oxd-main-menu-search > .oxd-icon-button').should('exist') //arrow icon

            cy.get(':nth-child(1) > .oxd-main-menu-item').click()  //Admin button in Menu bar
            cy.get('.oxd-topbar-header-title').should('exist')
            cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Admin')
            cy.get('.oxd-topbar-header-breadcrumb-level').should('have.text', 'User Management')
            cy.get('.oxd-glass-button').should('exist')

            cy.get('.oxd-topbar-body').should('contain','User Management').and('contain','Job').and('contain','Organization').and('contain','Qualification').and('contain','More')

            // cy.get('.oxd-table-filter-header').should('contain', 'System Users')
            cy.contains('Username').should('exist')
            cy.contains('User Role').should('exist')
            cy.contains('Employee Name').should('exist')
            cy.contains('Status').should('exist')
            cy.contains('Reset').should('exist')
            cy.contains('Search').should('exist')


        })

    it('Add Button Test-2', () =>{
            cy.contains(' Add ').should('exist').click()  // ADD button
            cy.url().should('include', '/admin/saveSystemUser')
            cy.contains('Add User').should('exist')
            cy.contains('User Role').should('exist')
            cy.contains('Employee Name').should('exist')
            cy.contains('Status').should('exist')
            cy.contains('Username').should('exist')
            cy.contains('Password').should('exist')
            cy.contains('Confirm Password').should('exist')
            cy.contains('Cancel').should('exist')
            cy.contains('Save').should('exist')

            

        })

})
