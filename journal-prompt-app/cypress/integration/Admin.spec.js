/// <reference types="cypress" />

context('Admin Page', () => {
  const BASE_URL = 'http://localhost:3000/journal-prompt#/';
  const PROMPT = 'Who is your favorite cowboy?';
  const TEN_SECONDS = 10000;

  beforeEach(() => {
    cy.visit(`${BASE_URL}journal-prompt/admin/`);
  });

  it('should add a new prompt to the table', () => {
    cy.get('input').type(PROMPT);
    cy.get('button').contains('Add').click();

    cy.contains('tr', PROMPT, { timeout: TEN_SECONDS }).should('be.visible');
  });

  it('should delete a prompt from the table', () => {
    cy.contains('tr', PROMPT, { timeout: TEN_SECONDS }).find('.fa-trash').click();
    cy.contains('tr', PROMPT, { timeout: TEN_SECONDS }).should('not.exist');
  });
});
