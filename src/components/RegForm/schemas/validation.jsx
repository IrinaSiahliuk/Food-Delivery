import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const validationCheck = yup.object().shape({
  phoneNumber: yup.number().required("Обязательное поле"),
  email: yup
    .string()
    .email("Введите действительный email")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(5, "Пароль должен содержать 5 символов")
    .matches(passwordRules, {
      message: "Как минимум одна заглавная буква и одна цифра",
    })
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательное поле"),
});
