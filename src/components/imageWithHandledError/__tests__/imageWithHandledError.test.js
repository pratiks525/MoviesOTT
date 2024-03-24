import { render } from '@testing-library/react-native';
import React from 'react';
import ImageWithHandledError from '..';
import { IMAGES } from '../../../common/constants';

describe('ImageWithHandledError component', () => {
  test('renders image snapshot', () => {
    const container = render(<ImageWithHandledError  uri={'uri'}/>);
    expect(container).toMatchSnapshot();
  });

  test('renders missing image when provided URI', () => {
    const uri = 'uri';
    const { getByTestId } = render(<ImageWithHandledError uri={uri} />);
    const imageElement = getByTestId('thumbnail-image');
    expect(imageElement.props.source).toBe('uri');
  });

  test('renders missing image when provided URI fails to load', () => {
    const uri = undefined;
    const { getByTestId } = render(<ImageWithHandledError uri={uri} />);
    const imageElement = getByTestId('thumbnail-image');
    expect(imageElement.props.source).toBe(IMAGES.missing);
  });
});