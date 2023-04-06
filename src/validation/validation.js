const REQUIRED_FIELD = "Field cannot be empty";
export const loginValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 2,
    message: "Should be longer than 2 characters",
  },
  pattern: {
    value: /[a-zA-Z]/,
    message: "Login should be only in english",
  },
};
export const nameValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 2,
    message: "Should be longer than 2 characters",
  },
};
export const emailValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 2,
    message: "Should be longer than 2 characters",
  },
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "Invalid email",
  },
};
export const passwordValidation = {
  required: REQUIRED_FIELD,
  minLength: {
    value: 8,
    message: "Should be longer than 8 characters",
  },
};
