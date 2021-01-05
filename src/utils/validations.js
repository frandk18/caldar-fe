export const required = (value) => {
  return value ? undefined : "Required";
};

export const validateName = (value) => {
  return /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
    value
  )
    ? undefined
    : "Invalid name";
};

export const validateEmail = (value) => {
  return /\S+@\S+\.\S+/.test(value) ? undefined : "Invalid email";
};

export const validatePhone = (value) => {
  return value.length > 6 ? undefined : "Invalid Phone";
};

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
