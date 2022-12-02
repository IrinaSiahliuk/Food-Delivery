import { useField } from "formik";

import Style from "components/RegForm/styles.module.css";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? Style.input_error : ""}
      />
      {meta.touched && meta.error && <div className={Style.error}>{meta.error}</div>}
    </>
  );
};
export default CustomInput;