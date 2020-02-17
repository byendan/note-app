import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import DisplayPage from '../../app/containers/DisplayPage';
import Display from '../../app/components/Display';
import { configureStore } from '../../app/store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <DisplayPage />
      </ConnectedRouter>
    </Provider>
  );
  const app = mount(provider);
  return {
    app,
    display: app.find(Display)
  };
}

describe('containers', () => {
  describe('App', () => {
    it('shows a display', () => {
      const { display } = setup();
      expect(display.exists()).toBe(true);
    });
  });
});
