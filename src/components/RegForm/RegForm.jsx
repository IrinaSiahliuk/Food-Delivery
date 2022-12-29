import { Form, Formik } from "formik";
import { useContext } from "react";
import { validationCheck } from "components/RegForm/schemas/validation";

import Style from "components/RegForm/styles.module.css";
import Logo from "assets/HeaderImg/Logo.svg";
import CustomInput from "components/RegForm/CustomInput";

import styles from "./styles.module.css";
import { Store } from "app";

const RegForm = () => {
  const [store, setStore] = useContext(Store);
  let users = [];

  // let localUsers = localStorage.getItem('users');
  // if (localUsers.length > 0) {
  //   users = JSON.parse(localUsers);
  // }
  
  const onSubmit = async (values, actions) => {
    console.log(actions);
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    setStore((pre) => ({
      ...pre,
      user: {
        ...pre.user,
        email: values.email,
        phone: values.phoneNumber,
        password: values.password
      }
    }));
    console.log(store);//не записывает сразу
    users.push(store.user);
    localStorage.setItem('users', JSON.stringify(users));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationCheck}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <div className={Style.form_wrapper}>
          <div className={styles.logoWrapper}>
            <img classname={styles.logoImg} src={Logo} />
            <div className={styles.logoTitles}>
              <div className={styles.logoTitle}>YA BAO</div>
              <div className={styles.logoSubtitle}>дух китайской еды</div>
            </div>
          </div>
          <Form className={Style.form}>
            <h2 className={Style.form_title}>Регистрация</h2>
            <CustomInput
              label="Номер телeфона"
              name="phoneNumber"
              type="number"
              placeholder="+375336286661"
            />

            <CustomInput
              label="Адрес электронной почты"
              name="email"
              type="text"
              placeholder="email@mail.ru"
            />

            <CustomInput
              label="Пароль"
              name="password"
              type="password"
              placeholder="Введите пароль"
            />

            <CustomInput
              label="Подтвердите пароль"
              name="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
            />
            <button disabled={isSubmitting} type="submit">
              Подтвердить
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default RegForm;
