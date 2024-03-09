//const sentArgs={username:'elizaveta.klimova.prague@gmail.com', password:'analnykloun1507'}
describe("Log in", function() {
    it("Sign in", function() {
        //cy.origin("https://pythoninstitute.org/", { args: sentArgs}
        //cy.visit("https://pythoninstitute.org/python-essentials-1") initial url
        cy.visit("https://edube.org/study/pe1")
        //cy.contains("SIGN UP").click()
        //cy.visit("https://edube.org/study/pe1")
        cy.contains("Log in").click()
        cy.get("input[type='email']").type('elizaveta.klimova.prague@gmail.com')
        cy.get("input[type='password']").type('analnykloun1507')
        //cy.contains("Log in").click()
        //cy.get('.btn').click(110.42,45.73)
        cy.get('.login-form form .form-group').contains("Log in").click()
        cy.contains('Resume').click()
        cy.get('.close-btn').contains("×").click()
        cy.contains('Next').click()
    })
    
})


