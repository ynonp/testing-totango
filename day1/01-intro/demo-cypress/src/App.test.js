import { mount } from '@cypress/react' // or @cypress/vue
import React from 'react';
import App from '../../../src/App'

it('shows a button', () => {
  mount(<App />)
  cy.get('button').should('have.text', 'Click');
})

it('starts the count at 0', () => {
  mount(<App />)
  cy.contains('You clicked 0 times').should('be.visible');
})

it('Increases as the user clicks', () => {
  mount(<App />)
  cy.get('button').click();
  cy.get('button').click();
  cy.get('button').click();
  cy.contains('You clicked 3 times').should('be.visible');
})

