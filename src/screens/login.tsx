import React from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
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
import { loginStart, loginSuccess, loginFailure } from '@stores/slices/auth';
import { RootState } from '@stores';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

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
    onSubmit: async (values) => {
      try {
        dispatch(loginStart());
        
        // Simulate a simple login validation using state
        // In a real app, you might validate against stored credentials
        if (values.email && values.password) {
          // Mock successful login
          const mockUser = {
            email: values.email,
          };
          const mockToken = 'mock-jwt-token-' + Date.now();
          
          dispatch(loginSuccess({ user: mockUser, token: mockToken }));
        } else {
          dispatch(loginFailure('Please enter valid credentials'));
        }
      } catch (err) {
        dispatch(loginFailure('Login failed. Please try again.'));
      }
    },
  });

  // Show error if any
  React.useEffect(() => {
    if (error) {
      Alert.alert('Login Error', error);
    }
  }, [error]);

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
          text={loading ? "Logging in..." : "Log in"}
          disabled={!formik.isValid || loading}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Container>
  );
};
