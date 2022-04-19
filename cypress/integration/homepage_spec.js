describe('Homepage', () => {
    it('Links to blog post', () => {
      cy.visit('/')
      cy.get('li > a:first').click();
      cy.contains('a')
    })
    it('Has profile picture', () => {
      cy.visit('/')
      cy.get('img')
    })
  })