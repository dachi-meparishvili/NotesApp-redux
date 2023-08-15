/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action } from "./Action";

export interface noteState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: noteState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
