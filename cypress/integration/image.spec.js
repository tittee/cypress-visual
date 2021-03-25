const pages = ['https://example.com'];
const sizes = ['iphone-6', 'ipad-2', [768, 1200]];
describe('Visual Regression', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      it(`Shoould match ${page} in resolution ${size}`, () => {
        let currentTime = new Date(Date.UTC(2021, 3, 25)).getDate();
        cy.clock(currentTime);
        cy.setResolution(size);
        cy.visit(page);
        cy.matchImageSnapshot();
      });
    });
  });
});

describe('Single Element Snapshot', () => {
  it("Should  match a single element on the page", () => {
    cy.visit(pages[0]);
    cy.get("h1").matchImageSnapshot();
  })
})
