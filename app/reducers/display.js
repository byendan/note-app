import { TOGGLE_NAV_PANEL } from '../actions/display';
import type { Action } from './types';

export default function display(state = true, action: Action) {
  switch (action.type) {
    case TOGGLE_NAV_PANEL:
      return !state;
    default:
      return state;
  }
}
