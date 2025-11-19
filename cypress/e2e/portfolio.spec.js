describe('Portfólio Fellipe QA', () => {

  it('Carrega a página inicial', () => {
    cy.visit('/');
    cy.contains('Fellipe Oliveira').should('be.visible');
  });

  it('Verifica seção de skills', () => {
    cy.get('#skills').should('be.visible');
    cy.contains('Automação Web (Cypress)').should('exist');
  });

  it('Valida contraste de cor do título', () => {
    cy.get('h1').should('have.css', 'color', 'rgb(0, 195, 255)');
  });

  it('Confere se imagem de perfil existe no HTML', () => {
    cy.get('img').should('have.attr', 'src').and('include', 'foto');
  });

});
