import type { GetState, Dispatch } from '../reducers/types';

export const TOGGLE_NAV_PANEL = 'TOGGLE_NAV_PANEL';

export function toggleNavPanel() {
  return {
    type: TOGGLE_NAV_PANEL
  };
}

export function toggleNavPanelState() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { showNavPanel } = getState;
    dispatch(toggleNavPanel());
  };
}
