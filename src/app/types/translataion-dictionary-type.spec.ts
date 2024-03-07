import { getTranslation, TranslationDictionary, TranslationName, DEFAULT_TRANSLATION_DICTIONARY } from './TranslationDictionaryType';

describe('getTranslation', () => {
  it('should return the translation from the provided dictionary for a valid name', () => {
    const translationDictionary: TranslationDictionary = {
      [TranslationName.SIGNIN_FORM__LABEL_USERNAME]: 'Custom Username Label',
      SIGNIN_FORM__LABEL_PASSWORD: '',
      SIGNIN_FORM__ACTION_SIGNIN: '',
      SIGNIN_FORM__ACTION_CREATEACCOUNT: '',
      SIGNIN_FORM__ACTION_FORGOTPASSWORD: '',
      SIGNIN_FORM__MESSAGE_NO_ACCOUNT: '',
      SIGNIN_FORM__GREETING_TITLE: '',
      SIGNIN_FORM__GREETING_SUBTITLE: '',
      SIGNIN_ERROR__BLANK_USERNAME: '',
      SIGNIN_ERROR__INVALID_USERNAME: '',
      SIGNIN_ERROR__USER_NOT_FOUND: '',
      SIGNIN_ERROR__EMAIL_NOT_VERIFIED: '',
      SIGNIN_ERROR__BLANK_PASSWORD: '',
      SIGNIN_ERROR__INCORRECT_PASSWORD: '',
      SIGNIN_ERROR__BAD_REQUEST: '',
      SIGNIN_ERROR__UNKNOWN_ERROR: '',
      SIGNUP_FORM__LABEL_GIVENNAME: '',
      SIGNUP_FORM__LABEL_FAMILYNAME: '',
      SIGNUP_FORM__LABEL_EMAIL: '',
      SIGNUP_FORM__LABEL_PASSWORD: '',
      SIGNUP_FORM__LABEL_RETYPEPASSWORD: '',
      SIGNUP_FORM__ACTION_SIGNIN: '',
      SIGNUP_FORM__ACTION_CREATEACCOUNT: '',
      SIGNUP_FORM__MESSAGE_EXISTING_ACCOUNT: '',
      SIGNUP_FORM__GREETING_TITLE: '',
      SIGNUP_FORM__GREETING_SUBTITLE: '',
      SIGNUP_ERROR__BLANK_PASSWORD: '',
      SIGNUP_ERROR__BLANK_RETYPEPASSWORD: '',
      SIGNUP_ERROR__BLANK_GIVENNAME: '',
      SIGNUP_ERROR__BLANK_FAMILYNAME: '',
      SIGNUP_ERROR__BLANK_USERNAME: '',
      SIGNUP_ERROR__INVALID_USERNAME: '',
      SIGNUP_ERROR__PASSWORDS_DO_NOT_MATCH: '',
      SIGNUP_ERROR__USER_ALREADY_EXISTS: '',
      SIGNUP_ERROR__BAD_REQUEST: '',
      SIGNUP_ERROR__UNKNOWN_ERROR: '',
      RESEND_VERIFY_LINK_FORM__LABEL_EMAIL: '',
      RESEND_VERIFY_LINK_FORM__ACTION_SEND: '',
      RESEND_VERIFY_LINK_FORM__ACTION_SIGNIN: '',
      RESEND_VERIFY_LINK_FORM__MESSAGE_ALREADY_VERIFIED: '',
      RESEND_VERIFY_LINK_FORM__GREETING_TITLE: '',
      RESEND_VERIFY_LINK_FORM__GREETING_SUBTITLE: '',
      RESEND_VERIFY_LINK_ERROR__USER_NOT_FOUND: '',
      RESEND_VERIFY_LINK_ERROR__INVALID_USERNAME: '',
      RESEND_VERIFY_LINK_ERROR__BAD_REQUEST: '',
      RESEND_VERIFY_LINK_ERROR__UNKNOWN_ERROR: '',
      FORGOT_PASSWORD_FORM__LABEL_EMAIL: '',
      FORGOT_PASSWORD_FORM__ACTION_SEND: '',
      FORGOT_PASSWORD_FORM__ACTION_SIGNIN: '',
      FORGOT_PASSWORD_FORM__MESSAGE_REMEMBER_PASSWORD: '',
      FORGOT_PASSWORD_FORM__GREETING_TITLE: '',
      FORGOT_PASSWORD_FORM__GREETING_SUBTITLE: '',
      FORGOT_PASSWORD_ERROR__USER_NOT_FOUND: '',
      FORGOT_PASSWORD_ERROR__INVALID_USERNAME: '',
      FORGOT_PASSWORD_ERROR__BAD_REQUEST: '',
      FORGOT_PASSWORD_ERROR__UNKNOWN_ERROR: ''
    };

    const result = getTranslation(TranslationName.SIGNIN_FORM__LABEL_USERNAME, translationDictionary);

    expect(result).toBe('Custom Username Label');
  });

  it('should return the translation from the default dictionary if no custom dictionary is provided', () => {
    const result = getTranslation(TranslationName.SIGNIN_FORM__ACTION_SIGNIN);

    expect(result).toBe(DEFAULT_TRANSLATION_DICTIONARY[TranslationName.SIGNIN_FORM__ACTION_SIGNIN]);
  });

  it('should handle missing translations gracefully by returning an empty string', () => {
    const nonExistentKey = 'NON_EXISTENT_TRANSLATION_KEY' as TranslationName;
    const result = getTranslation(nonExistentKey);

    expect(result).toBe('');
  });

});
