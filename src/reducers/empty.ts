
import * as Actions from '../constants/actions';

export interface EmptyState {
  doNothing: boolean
}

const initialState = {
  doNothing: false
};

export function empty(state=initialState, action): EmptyState {
  
  switch(action.type) {
    case Actions.DO_NOTHING:
      return { doNothing: true };
    default :
  }
  return state
};
        
  