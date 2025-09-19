import { Button, Container, Space, Text } from '@components/common';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useAuthNavigation } from '@hooks';
import { images, theme } from '@styles';
import { ERoutes } from '@types';

export const WelcomeScreen = () => {
  const navigation = useAuthNavigation();

  const handleSignIn = () => {
    navigation.navigate(ERoutes.LOGIN);
  };

  const handleCreateAccount = () => {
    navigation.navigate(ERoutes.CREATE_ACCOUNT);
  };

  return (
    <Container style={[theme.globalStyles.verticalCenter]}>
      <View style={[theme.globalStyles.padding4H]}>
        <View style={styles.imageWrapper}>
          <Image
            source={images.Welcome}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <Space space={30} />
      <View style={[theme.globalStyles.padding36H]}>
        <Text
          style={[theme.textVariants.h32Bold, theme.textVariants.centerText]}
        >
          Explore HiDO app
        </Text>
        <Space space={10} />
        <Text
          style={[
            theme.textVariants.body16,
            theme.textVariants.lightText,
            theme.textVariants.centerText,
          ]}
        >
          Now your medications are in one place and always under control
        </Text>
        <Space space={70} />
        <Button text="Sign In" onPress={handleSignIn} />
        <Space space={14} />
        <Button
          text="Create Account"
          variant="outlined"
          onPress={handleCreateAccount}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    maxWidth: 400,
    aspectRatio: 8.55 / 7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
