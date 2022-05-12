import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../src/App';

describe('App Snapshot', () => {
  it('Should match', async () => {
    const component = render(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
