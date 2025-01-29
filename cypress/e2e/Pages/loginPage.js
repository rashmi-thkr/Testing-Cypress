export class LoginPage{

    enterUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username) //username
    }
    enterPassword(passwd){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passwd) //password
    }
    enterLoginBtn(){
        cy.get('.oxd-button').click() //Login button
    }

}