import React from "react";
import Footer from "../themes/Footer";
import Header from "../themes/Header";
import Navbar from "../themes/Navbar";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
export default function Register() {
  // validation
  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Not in right pattern"
      ),
    name: Yup.string()
      .required("This field is required")
      .matches(
        /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
        "Not in right pattern"
      ),
    password: Yup.string()
      .required("This field is required")
      .min(6, "Must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password"), null], "Your passwords do not match."),
    phone: Yup.string()
      .required("This field is required")
      .matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
        "Vietnam's phone number pattern only"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: {
        male: true,
        female: false,
      },
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Header />
      <Navbar />
      <section className="register" id="register">
        <div className="container">
          <div className="title">
            <p>Register</p>
          </div>
          <form
            className="form"
            action
            id="formRegister"
            onSubmit={formik.handleSubmit}
          >
            <div className="reg-content">
              <div className="reg-left">
                <div className="material-form-field">
                  <input
                    id="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="material-form-field-label"
                    htmlFor="field-text"
                  >
                    Email
                  </label>
                  {formik.errors.email ? (
                    <span className="text-danger">{formik.errors.email}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="material-form-field">
                  <input
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="material-form-field-label"
                    htmlFor="field-text"
                  >
                    Password
                  </label>
                  {formik.errors.password ? (
                    <span className="text-danger">
                      {formik.errors.password}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="material-form-field">
                  <input
                    id="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="material-form-field-label"
                    htmlFor="field-text"
                  >
                    Password Confirm
                  </label>
                  {formik.errors.confirmPassword ? (
                    <span className="text-danger">
                      {formik.errors.confirmPassword}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="reg-right">
                <div className="material-form-field">
                  <input
                    id="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="material-form-field-label"
                    htmlFor="field-text"
                  >
                    Name
                  </label>
                  {formik.errors.name ? (
                    <span className="text-danger">{formik.errors.name}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="material-form-field">
                  <input
                    id="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    className="material-form-field-label"
                    htmlFor="field-text"
                  >
                    Phone
                  </label>
                  {formik.errors.phone ? (
                    <span className="text-danger">{formik.errors.phone}</span>
                  ) : (
                    ""
                  )}
                </div>
                <div id="gender" className="gender">
                  <label>Gender</label>
                  <div className="radio gender_inp">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      defaultValue="male"
                      defaultChecked
                      onChange={formik.handleChange}
                    />
                    <label className="radio-label" htmlFor="male">
                      Male
                    </label>
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      defaultValue="female"
                      onChange={formik.handleChange}
                    />
                    <label className="radio-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <button id="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
