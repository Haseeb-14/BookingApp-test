import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Input, Space, Text } from '@components/common';
import { useAuthNavigation } from '@hooks';
import { theme } from '@styles';
import { ERoutes, TCreateAccountFormValues } from '@types';

export const CreateAccountScreen = () => {
  const navigation = useAuthNavigation();

  const formik = useFormik<TCreateAccountFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      signUpCode: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      signUpCode: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async () => {
      navigation.navigate(ERoutes.CREATE_PASSWORD);
    },
  });

  const handleLogin = () => {
    navigation.navigate(ERoutes.LOGIN);
  };

  return (
    <Container safe keyboardAvoid>
      <ScrollView contentContainerStyle={theme.globalStyles.paddingContainer}>
        <Space space={60} />
        <Text style={[theme.textVariants.h30Bold]}>Create account</Text>
        <Space space={38} />
        <View style={[theme.globalStyles.gap28]}>
          <Input
            id="firstName"
            label="First name"
            placeholder="Your first name"
            value={formik.values.firstName}
            onChangeText={formik.handleChange('firstName')}
          />
          <Input
            id="lastName"
            label="Last name"
            placeholder="Your last name"
            value={formik.values.lastName}
            onChangeText={formik.handleChange('lastName')}
          />
          <Input
            id="signUpCode"
            label="Sign-up Code"
            placeholder="Sign up code"
            value={formik.values.signUpCode}
            onChangeText={formik.handleChange('signUpCode')}
          />
          <Input
            id="email"
            label="Email address"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Your email"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
          />
        </View>
        <Space space={60} />
        <Button
          text="Next"
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
        />
        <Space space={56} />
        <Text style={[theme.textVariants.centerText]}>
          Already have an account?&nbsp;
          <Text
            onPress={handleLogin}
            style={[
              theme.textVariants.body14Semi,
              theme.textVariants.underlineText,
            ]}
          >
            Log in
          </Text>
        </Text>
      </ScrollView>
    </Container>
  );
};
