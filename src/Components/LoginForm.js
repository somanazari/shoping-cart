import { useFormik } from "formik";
import Input from "../Components/Common/Input";
import * as yup from "yup";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../Services/HttpRequestMethods";
import { useEffect, useState } from "react";
import { UseAuth, useAuthActions } from "../Context/Auth/AuthProvider";
import { useQuery } from "../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ history }) => {
  // use query => if user was in checkoutPage and dont loged in
  // he|she most login and redirect to checkoutPage
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();
  const auth = UseAuth();

  // if we come to loginPage and we loged in, we push to redirect
  useEffect(() => {
    if (auth) history.push(redirect);
  }, [redirect, auth]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      history.push(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("email format is incorrect")
      .required("Email is required"),
    password: yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signup_form">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Login
        </button>
        {error && <p>{error}</p>}
        <Link className="notSignUp" to={`/signup?redirect=${redirect}`}>
          Not Signup Yet?
        </Link>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
