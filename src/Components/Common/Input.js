// controlled component
// type = "text" ==> default parameter
const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="formControll">
      <label htmlFor={name}>{label}:</label>
      <input
        {...formik.getFieldProps({ name })}
        placeholder={`Your ${name}...`}
        type={type}
        name={name}
      />

      {/*  [name] => is variable & changable */}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
