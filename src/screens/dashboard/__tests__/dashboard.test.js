import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Dashboard from '..';
import { TITLE } from '../../../common/constants';

describe('test the Dashboard UI', ()=>{
  it('check Dashboard UI', ()=>{
    const container = render(<Dashboard/>);
    expect(container).toMatchSnapshot();
  })

  test('trigger button clicks', () => {
    const { getByTestId, getByText } = render(<Dashboard/>);
    const searchIcon = getByTestId('search-icon');
    const backIcon = getByTestId('back-icon');
    fireEvent.press(searchIcon);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeTruthy();

    //Trigerring onchangeevent
    fireEvent.changeText(searchInput, 'The'); 

    fireEvent.press(backIcon);
    const titleElement = getByText(TITLE);
    expect(titleElement).toBeTruthy();
    
  });
})  