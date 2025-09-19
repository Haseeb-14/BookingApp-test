export type TSelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TLoginFormValues = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

export type TCreateAccountFormValues = {
  firstName?: string;
  lastName?: string;
  signUpCode?: string;
  email?: string;
};

export type TCreatePasswordFormValues = {
  password?: string;
  passwordConfirm?: string;
};

export type TLearnMoreFormValues = {
  dob?: Date;
  ethnicity?: string;
  income?: string;
  sex?: string;
};
