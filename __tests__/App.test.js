import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('test the app folder', ()=>{
  it('check app container', ()=>{
    const container = render(<App/>);
    expect(container).toMatchSnapshot();
  })
})  