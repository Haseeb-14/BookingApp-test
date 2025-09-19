import React, { useState } from 'react';
import { Platform, View, StyleSheet, TextInputProps } from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Button, Container, Space, Text } from '@components/common';
import { useAuthNavigation } from '@hooks';
import { theme } from '@styles';
import { ERoutes } from '@types';

const CELL_COUNT = 5;
const autoComplete = Platform.select<TextInputProps['autoComplete']>({
  android: 'sms-otp',
  default: 'one-time-code',
});

export const PairDeviceScreen = () => {
  const navigation = useAuthNavigation();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handlePair = () => {
    navigation.navigate(ERoutes.ONBOARDING_COMPLETE);
  };

  return (
    <Container safe>
      <Space space={76} />
      <View style={[theme.globalStyles.padding32H]}>
        <Text style={[theme.textVariants.h30Bold]}>Pair your HiDO Device</Text>
      </View>
      <Space space={26} />
      <View style={[theme.globalStyles.padding36H]}>
        <Text
          style={[
            theme.textVariants.body16,
            theme.textVariants.lightText,
            theme.textVariants.centerText,
          ]}
        >
          Now with your new HiDO device pair the two together by entering the{' '}
          <Text style={[theme.textVariants.body14Semi]}>5 digit code</Text> on
          the device.
        </Text>
        <Space space={40} />
        <CodeField
          ref={ref}
          {...props}
          caretHidden={false}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={autoComplete}
          renderCell={({ index, symbol }) => (
            <Text
              key={index}
              style={[
                theme.textVariants.h24Medium,
                theme.globalStyles.borderRadius12,
                theme.textVariants.text,
                theme.textVariants.centerText,
                styles.cell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol}
            </Text>
          )}
        />
        <Space space={60} />
        <Button
          text="Pair"
          disabled={value.length !== 5}
          onPress={handlePair}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: theme.spacing.base * 15,
    height: theme.spacing.base * 15,
    lineHeight: theme.spacing.base * 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});
