import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";

export default function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  const handleSubmit = (action) => {
    toast.success(
      "Your reservation has been successfully processed. We will be in touch with you shortly to confirm the details."
    );
    action.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.formBlock}>
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                className={css.formInput}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorStyle}
              />
            </div>
            <div className={css.formBlock}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={css.formInput}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorStyle}
              />
            </div>
            <div className={css.formBlock}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                placeholderText="Booking date*"
                className={`${css.formInput} ${css.datePicker}`}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.errorStyle}
              />
            </div>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={css.formInput}
            />

            <div className={css.formBtn}>
              <button type="submit" className={css.btn}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}