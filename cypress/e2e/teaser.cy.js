
describe('teaser', () => {
  it('teaser UI test', () => {
    cy.visit('https://wknd.site/us/en.html')
    cy.get('#cmp-teaser__title').contains("Experience the world with us")

  })
})