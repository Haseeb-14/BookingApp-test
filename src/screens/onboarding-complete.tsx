import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { Container, Text } from '@components/common';
import { useRootNavigation } from '@hooks';
import { images, theme } from '@styles';
import { ERoutes } from '@types';

export const OnboardingCompleteScreen = () => {
  const navigation = useRootNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ERoutes.MAIN, {
        screen: ERoutes.AVAILABLE_STACK,
        params: {
          screen: ERoutes.AVAILABLE,
        },
      });
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <ImageBackground
        source={images.OnboardingComplete}
        style={[theme.globalStyles.flex1]}
        resizeMode="contain"
      >
        <View
          style={[theme.globalStyles.flex1, theme.globalStyles.verticalCenter]}
        >
          <Text
            style={[theme.textVariants.h32Bold, theme.textVariants.centerText]}
          >
            You are all set!{`\n`}Welcome!
          </Text>
        </View>
      </ImageBackground>
    </Container>
  );
};
