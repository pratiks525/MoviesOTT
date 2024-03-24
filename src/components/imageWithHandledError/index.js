// This is common component for Image that shows default uri if something breaks
import React, {useState} from 'react';
import {Image} from 'react-native';
import {IMAGES} from '../../common/constants';

const ImageWithHandledError = ({uri, ...restProps}) => {
  const [imgUri, setImgUri] = useState(uri ?? IMAGES.missing); //if uri received as undefined change it to default uri

  //if uri loading gives error change it to default uri
  const onError = () => {
    setImgUri(IMAGES.missing);
  };

  return (
    <Image
      testID={'thumbnail-image'}
      {...restProps}
      source={imgUri}
      onError={onError}
    />
  );
};

export default ImageWithHandledError;
