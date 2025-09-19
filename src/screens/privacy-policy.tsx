import React, { useState } from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, CheckBox, Container, Space } from '@components/common';
import { useAuthNavigation } from '@hooks';
import { theme } from '@styles/theme';
import { ERoutes } from '@types';

export const PrivacyPolicyScreen = () => {
  const navigation = useAuthNavigation();

  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [isRead, setIsRead] = useState<boolean>(false);
  const [policyAccept, setPolicyAccept] = useState<boolean>(false);

  const handleNext = () => {
    navigation.navigate(ERoutes.CONNECT_PILLBOX);
  };

  return (
    <Container safe>
      <Space space={60} />
      <Pdf
        source={{
          uri: 'https://test.hidohealth.com/api/public/prototype-waiver.pdf',
          cache: true,
        }}
        enableDoubleTapZoom
        trustAllCerts={false}
        fitPolicy={0}
        onLoadComplete={count => {
          setNumberOfPages(count);
        }}
        onError={error => console.log('load pdf error', error)}
        onPageChanged={page => {
          if (numberOfPages === page) {
            setIsRead(true);
          }
        }}
        style={[
          theme.globalStyles.widthFull,
          theme.globalStyles.aspectRatio1,
          theme.globalStyles.bgWhite,
        ]}
      />
      <Space space={24} />
      <View style={[theme.globalStyles.paddingContainer]}>
        <CheckBox
          disabled={!isRead}
          label="I have read and accept the terms and privacy policy"
          value={policyAccept}
          onChangeValue={setPolicyAccept}
        />
        <Space space={60} />
        <Button text="Next" disabled={!policyAccept} onPress={handleNext} />
      </View>
    </Container>
  );
};
