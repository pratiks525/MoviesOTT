import React, { useState } from "react";
import { Image } from "react-native";
import { IMAGES } from "../../common/constants";

const ImageWithHandledError = ({
  uri,
  ...restProps
}) => {
  const [imgUri, setImgUri] = useState(uri ?? IMAGES.missing);

  const onError = () => {
    setImgUri(IMAGES.missing)
  }

  return (
    <Image
      testID={'thumbnail-image'}
      {...restProps}
      source={imgUri}
      onError={onError}
    />
  )
}

export default ImageWithHandledError;