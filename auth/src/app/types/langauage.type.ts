export enum AM {
  LANG = "Հայերեն",
  SIGN_UP = "Գրանցվել",
  SIGN_UP_NOW = "Գրանցվեք հիմա",
  SIGN_IN = "Մուտք Գործել",
  USER_NAME = "Մուտքանուն",
  PASSWORD = "Գաղտնաբառ",
  CONFIRM_PASSWORD = "Կրկնել գաղտնաբառը",
  DONT_HAVE_ACCOUNT = "Դեռ չունե՞ք հաշիվ",
  DO_YOU_HAVE_ACCOUNT = "Դուք ունե՞ք հաշիվ",
  YES = "Այո",
  NO = "Ոչ",

}

export enum ENG {
  LANG = "English",
  SIGN_IN = "Sign In",
  SIGN_UP = "Sign Up",
  SIGN_UP_NOW = "Sign Up Now",
  USER_NAME = "Username",
  PASSWORD = "Password",
  CONFIRM_PASSWORD = "Confirm Password",
  DONT_HAVE_ACCOUNT = "Don’t have an account?",
  DO_YOU_HAVE_ACCOUNT = "Do You have an account?",
  YES = "YES",
  NO = "NO"
}

export enum Languages {
  ENG = "ENG",
  AM = "AM"
}

export const AmErrors: any = {
  FIELD_CAN_NOT_BE_EMPTY: 'Մուտքագրման դաշտը չի կարող դատարկ լինել։',
  PASSWORD_MISSMATCH: 'Գաղտնաբառի դաշտերը չեն համընկնում․',
  WRONG_CREDENTIALS: 'Ձեր մուտքանունը կամ գաղտնաբառը սխալ է',
  USER_DOES_NOT_EXIST: 'Օգտատերը գոյություն չունի'

}

export const EngErrors: any = {
  FIELD_CAN_NOT_BE_EMPTY: 'Field can not be empty.',
  PASSWORD_MISSMATCH: 'Password fields does not match.',
  WRONG_CREDENTIALS:'Your username or password wrong.',
  USER_DOES_NOT_EXIST: 'The user does not exist.'
}


