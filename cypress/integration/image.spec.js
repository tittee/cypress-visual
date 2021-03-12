describe('Visual Regression', () => {
  it('My first visual regression test', () => {
    cy.visit('https://example.com');
    cy.matchImageSnapshot();
  });
});
