import { Pact } from './pact';

export const PACT: Pact = {
    id: 1,
    title: 'Who gets the receipt for the entertainment expenses?',
    members: ['Carsten', 'Georgios'],
    selectionStrategy: 'Fixed Order, starting with Georgios',
    confirmationStrategy: 'On a confidential basis'
};