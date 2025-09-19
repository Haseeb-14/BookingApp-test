import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {
  Button,
  Container,
  PasswordInput,
  Space,
  Text,
} from '@components/common';
import { useAuthNavigation } from '@hooks';
import { theme } from '@styles';
import { ERoutes, TCreatePasswordFormValues } from '@types';
YupPassword(Yup);

export const CreatePasswordScreen = () => {
  const navigation = useAuthNavigation();

  const formik = useFormik<TCreatePasswordFormValues>({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Required')
        .min(8, 'Password is too short - should be 8 characters minimum.')
        .minLowercase(1, 'Password must contain at least 1 lower case letter')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Required'),
    }),
    onSubmit: async () => {
      navigation.navigate(ERoutes.LEARN_MORE);
    },
  });

  return (
    <Container safe keyboardAvoid>
      <ScrollView contentContainerStyle={theme.globalStyles.paddingContainer}>
        <Space space={60} />
        <Text style={[theme.textVariants.h30Bold]}>Create password</Text>
        <Space space={38} />
        <View style={[theme.globalStyles.gap28]}>
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          <PasswordInput
            id="confirmPassword"
            label="Re-enter your password"
            placeholder="Password"
            value={formik.values.passwordConfirm}
            onChangeText={formik.handleChange('passwordConfirm')}
          />
        </View>
        <Space space={60} />
        <Button
          text="Next"
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Container>
  );
};
