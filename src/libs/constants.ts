import { TSelectOption } from '@types';

const ETHNICITY_OPTIONS: TSelectOption[] = [
  {
    label: 'White',
    value: 'White',
  },
  {
    label: 'Black or African American',
    value: 'Black or African American',
  },
  {
    label: 'Asian',
    value: 'Asian',
  },
  {
    label: 'Hispanic, Latino',
    value: 'Hispanic, Latino',
  },
  {
    label: 'Native Hawaiian and Pacific Islander',
    value: 'Native Hawaiian and Pacific Islander',
  },
  {
    label: 'American Indian or Alaskan Native',
    value: 'American Indian or Alaskan Native',
  },
];

const INCOME_OPTIONS: TSelectOption[] = [
  {
    label: '$0-$30,000',
    value: '$0-$30,000',
  },
  {
    label: '$31,000-$60,000',
    value: '$31,000-$60,000',
  },
  {
    label: '$61,000-$90,000',
    value: '$61,000-$90,000',
  },
  {
    label: '$91,000-$120,000',
    value: '$91,000-$120,000',
  },
  {
    label: '$120,000+',
    value: '$120,000+',
  },
];

const SEX_OPTIONS: TSelectOption[] = [
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Male',
    value: 'Male',
  },
];
export const constants = {
  ETHNICITY_OPTIONS,
  INCOME_OPTIONS,
  SEX_OPTIONS,
};
