import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  CheckBox,
  Container,
  Input,
  PasswordInput,
  Space,
  Text,
} from '@components/common';
import { theme } from '@styles';
import { TLoginFormValues } from '@types';

export const LoginScreen = () => {
  const formik = useFormik<TLoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async () => {},
  });

  return (
    <Container safe keyboardAvoid>
      <ScrollView contentContainerStyle={theme.globalStyles.paddingContainer}>
        <Space space={100} />
        <Text style={[theme.textVariants.h30Bold]}>Hi, Welcome back! 👋</Text>
        <Space space={38} />
        <Input
          id="email"
          label="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Your email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
        <Space space={22} />
        <PasswordInput
          id="password"
          label="Password"
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Space space={16} />
        <View
          style={[
            theme.globalStyles.horizontalXCenter,
            theme.globalStyles.justifyBetween,
          ]}
        >
          <View style={[theme.globalStyles.flex1]}>
            <CheckBox
              label="Remember me"
              value={formik.values.rememberMe}
              onChangeValue={value => formik.setFieldValue('rememberMe', value)}
            />
          </View>
          <Text>Forgot password?</Text>
        </View>
        <Space space={42} />
        <Button
          text="Log in"
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Container>
  );
};
