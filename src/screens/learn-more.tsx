import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  DatePicker,
  Select,
  Space,
  Text,
} from '@components/common';
import { constants } from '@libs';
import { useAuthNavigation } from '@hooks';
import { theme } from '@styles';
import { ERoutes, TLearnMoreFormValues } from '@types';

export const LearnMoreScreen = () => {
  const navigation = useAuthNavigation();

  const formik = useFormik<TLearnMoreFormValues>({
    initialValues: {
      dob: undefined,
      ethnicity: undefined,
      income: undefined,
      sex: undefined,
    },
    validationSchema: Yup.object({
      dob: Yup.string().required('Required'),
      ethnicity: Yup.string().required('Required'),
      income: Yup.string().required('Required'),
      sex: Yup.string().required('Required'),
    }),
    onSubmit: async () => {
      navigation.navigate(ERoutes.PRIVACY_POLICY);
    },
  });

  return (
    <Container safe keyboardAvoid>
      <ScrollView contentContainerStyle={theme.globalStyles.paddingContainer}>
        <Space space={60} />
        <Text style={[theme.textVariants.h30Bold]}>
          Let’s learn more about you!
        </Text>
        <Space space={30} />
        <View style={[theme.globalStyles.gap28]}>
          <DatePicker
            label="What is your birthday?"
            placeholder="MM/DD/YYYY"
            maxDate={new Date(2006, 11, 31)}
            value={formik.values.dob}
            onChangeDate={v => formik.setFieldValue('dob', v)}
          />
          <Select
            label="What is your ethnicity?"
            options={constants.ETHNICITY_OPTIONS}
            value={formik.values.ethnicity}
            onChange={formik.handleChange('ethnicity')}
          />
          <Select
            label="What is your income?"
            options={constants.INCOME_OPTIONS}
            value={formik.values.income}
            onChange={formik.handleChange('income')}
          />
          <Select
            label="What is your sex?"
            options={constants.SEX_OPTIONS}
            value={formik.values.sex}
            onChange={formik.handleChange('sex')}
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
