import React from 'react';
import Enzyme, { mount } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import Display from '../../app/components/Display';
import Navigation from '../../app/components/Navigation';
import Editor from '../../app/components/Editor';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const app = mount(<Display />);
  return {
    app,
    navigation: app.find(Navigation),
    editor: app.find(Editor)
  };
}

describe('containers', () => {
  describe('navigation', () => {
    it('should display the component', () => {
      const { navigation } = setup();
      expect(navigation.exists()).toBe(true);
    });
  });

  describe('editor', () => {
    it('should display the component', () => {
      const { editor } = setup();
      expect(editor.exists()).toBe(true);
    });
  });
});
