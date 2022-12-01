import { Form, Formik } from "formik";
import { validationCheck } from "./schemas/validation";
import CustomInput from "./CustomInput";
import Style from "./styles.module.css";
import Logo from "../../assets/HeaderImg/Logo.svg";
import styles from "../../components/Header/styles.module.css";

const onSubmit = async (values, actions) => {
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const RegForm = () => {
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
