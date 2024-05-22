import CardData from '@/model/CardData';

export interface CardsAction {
  type: string;
  cards: CardData[],
  newCard: CardData,
  cardId: string,
}

const cardsReducer = (state: CardData[], action: Partial<CardsAction>): CardData[] => {
  switch (action.type) {
    case 'set':
      return action.cards ?? [];
    case 'add':
      const newState = [ ...state ];
      if (action.newCard) {
        newState.push(action.newCard);
      }
      return newState;
    case 'remove':
      return state.filter(card => card.id !== action.cardId);
    default:
      return state;
  }
}

export default cardsReducer;
