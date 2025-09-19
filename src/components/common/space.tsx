import React from 'react';
import { View } from 'react-native';

type TSpace = {
  space?: number;
};

export const Space = ({ space = 4 }: TSpace) => {
  return <View style={{ height: space }} />;
};
