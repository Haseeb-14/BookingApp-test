import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { theme } from '@styles';
import { Icons } from './icons';
import { Text } from './text';

type TInput = {
  label?: string;
  size?: 'sm' | 'lg';
  LeftElement?: React.ReactNode;
  onLeftElementPress?: () => void;
  RightElement?: React.ReactNode;
  onRightElementPress?: () => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  withBorder?: boolean;
  loading?: boolean;
  error?: boolean;
  errorText?: string;
} & TextInputProps;

export const Input = ({
  label,
  size = 'lg',
  LeftElement,
  onLeftElementPress,
  RightElement,
  onRightElementPress,
  containerStyle,
  style,
  loading = false,
  error = false,
  errorText = '',
  ...otherProps
}: TInput) => {
  return (
    <View style={[theme.globalStyles.gap4, containerStyle]}>
      {label ? <InputLabel label={label} error={error} /> : null}
      <View style={styles.inputWrapper}>
        <TextInput
          numberOfLines={1}
          placeholderTextColor={theme.colors.textLightExtra}
          style={[
            styles.input,
            {
              height:
                size === 'lg'
                  ? theme.spacing.base * 14
                  : theme.spacing.base * 11,
            },
            otherProps.multiline && { paddingVertical: theme.spacing[12] },
            {
              paddingLeft: LeftElement ? theme.spacing[36] : theme.spacing[16],
            },
            {
              paddingRight:
                RightElement || loading ? theme.spacing[36] : theme.spacing[16],
            },
            otherProps.editable === false && {
              backgroundColor: theme.colors.border,
            },
            !!error && {
              borderColor: theme.colors.danger,
              color: theme.colors.danger,
            },
            style,
          ]}
          {...otherProps}
        />
        {LeftElement ? (
          <TouchableOpacity
            style={styles.leftElement}
            onPress={onLeftElementPress}
          >
            {LeftElement}
          </TouchableOpacity>
        ) : null}
        {RightElement || loading ? (
          <>
            {loading ? (
              <View style={styles.rightElement}>
                <ActivityIndicator size="small" />
              </View>
            ) : RightElement ? (
              <TouchableOpacity
                style={styles.rightElement}
                onPress={onRightElementPress}
              >
                {RightElement}
              </TouchableOpacity>
            ) : null}
          </>
        ) : null}
      </View>
      {error ? <ErrorLabel error={errorText} /> : null}
    </View>
  );
};

type TInputLabel = {
  label: string;
  error?: boolean;
};

export const InputLabel = ({ label, error = false }: TInputLabel) => {
  return (
    <Text
      style={[
        theme.textVariants.body14,
        theme.textVariants.text,
        !!error && { color: theme.colors.danger },
      ]}
    >
      {label}
    </Text>
  );
};

type TErrorLabel = {
  error?: string;
  textStyle?: TextStyle;
};

export const ErrorLabel = ({ error = '', textStyle }: TErrorLabel) => {
  return (
    <Text style={[theme.textVariants.body10, styles.errorText, textStyle]}>
      {error}
    </Text>
  );
};

export const PasswordInput = (props: TInput) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const toggleShow = () => {
    setPasswordShow(prev => !prev);
  };

  return (
    <Input
      {...props}
      secureTextEntry={!passwordShow}
      RightElement={!passwordShow ? <Icons.EyeOnIcon /> : <Icons.EyeOffIcon />}
      onRightElementPress={toggleShow}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    paddingHorizontal: theme.spacing[12],
    paddingVertical: 0,
    height: theme.spacing.base * 12,
    color: theme.colors.text,
    fontFamily: theme.fontFamily[400],
    fontSize: 14,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  leftElement: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing[8],
  },
  rightElement: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing[8],
  },
  errorText: {
    color: theme.colors.danger,
    textAlign: 'right',
  },
});
