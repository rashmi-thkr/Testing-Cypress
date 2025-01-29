///<reference types="cypress"/>
import { LoginPage } from "./Pages/loginPage"

const lpObject = new LoginPage()  //Login Page Object


describe('Tests', () => {
    
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
    })

    it('Login Test-1 (valid credentials)', () => {
                
        lpObject.enterUsername("Admin")
        lpObject.enterPassword("admin123")
        lpObject.enterLoginBtn()
        cy.contains('Invalid credentials').should('not.exist')
        cy.wait(1000)
        
        })
    

    it('Login Test-2 (invalid username)', () => {
    
        lpObject.enterUsername("Rajiv") 
        lpObject.enterPassword("admin123")
        lpObject.enterLoginBtn()
        cy.contains('Invalid credentials').should('exist') // "Invalid Credentials" will be displayed
        cy.get('.oxd-alert').should('contain',"Invalid credentials") 
        cy.contains('Forgot your password?').should('exist')
    })

    it('Login Test-3 (invalid password)', () => {
    
        lpObject.enterUsername("Admin") 
        lpObject.enterPassword("123")
        lpObject.enterLoginBtn()
        cy.contains('Invalid credentials').should('exist') // "Invalid Credentials" will be displayed
        cy.get('.oxd-alert').should('contain',"Invalid credentials") 
        cy.contains('Forgot your password?').should('exist')
    })

})
