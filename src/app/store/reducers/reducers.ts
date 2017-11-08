import { Action } from '../actions/actions';
import { AppState } from '../../models/state.model';

// Reducers
export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'RECIPES_UPDATED': {
      return { ...state, ...action.payload };
    }
    case 'RECIPE_UPDATED': {
      const recipes = { ...state.recipes };
      recipes[action.payload.id] = action.payload;
      return { ...state, recipes };
    }
    case 'PROMOTED_RECIPES_UPDATED': {
      return Object.assign(state, { promoted: action.payload });
    }
    default: {
      return state;
    }
  }
}
