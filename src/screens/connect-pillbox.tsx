import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Container, Space, Text } from '@components/common';
import { useAuthNavigation } from '@hooks';
import { images, theme } from '@styles';
import { ERoutes } from '@types';

export const ConnectPillBoxScreen = () => {
  const navigation = useAuthNavigation();

  const handleNext = () => {
    navigation.navigate(ERoutes.PAIR_DEVICE);
  };

  return (
    <Container style={[theme.globalStyles.verticalCenter]}>
      <View style={styles.imageWrapper}>
        <Image
          source={images.ConnectPillBox}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={[theme.globalStyles.padding36H]}>
        <Text
          style={[theme.textVariants.h32Bold, theme.textVariants.centerText]}
        >
          Almost done!{'\n'} Lets connect you to your HiDO pillbox!
        </Text>
        <Space space={16} />
        <Text
          style={[
            theme.textVariants.body16,
            theme.textVariants.lightText,
            theme.textVariants.centerText,
          ]}
        >
          Please make sure the pillbox is close to your phone. Press next if you
          are ready to pair your device.
        </Text>
        <Space space={35} />
        <Button text="Next" onPress={handleNext} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    maxWidth: 430,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
