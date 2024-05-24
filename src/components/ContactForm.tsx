"use client";
import React from "react";
import { IoIosSend } from "react-icons/io";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";

export interface IContactForm {
  username: string;
  email: string;
  subject: string;
  message: string;
}

const contactFormDefaultValue: IContactForm = {
  username: "",
  email: "",
  subject: "",
  message: "",
};

const contactFormSchema = Yup.object().shape<
  Record<keyof IContactForm, Yup.AnySchema>
>({
  username: Yup.string().required("Name is required!"),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  subject: Yup.string().required("Subject is required!"),
  message: Yup.string().required("Message is required!"),
});

export const ContactForm = () => {
  const handleSubmit = (
    values: IContactForm,
    formikHelpers: FormikHelpers<IContactForm>
  ) => {
    toast.success("Message sent successfully!");
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={contactFormDefaultValue}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="grid grid-cols-2 gap-x-4 xl:gap-x-6 gap-y-4 md:gap-y-4 xl:gap-y-6">
            <div className="col-span-2 md:col-span-1">
              <Field
                type="text"
                className="w-full rounded-full h-12 xl:h-14 px-10 bg-[var(--input-bg)] border-none outline-none focus:outline focus:outline-[var(--primary)] outline-[2px]"
                placeholder="YOUR NAME"
                autoComplete={"disable"}
                name="username"
              />
              {errors.username && touched.username ? (
                <p className="text-red-500 mt-2 pl-8 italic">
                  {errors.username}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <Field
                type="email"
                className="w-full rounded-full h-12 xl:h-14 px-10 bg-[var(--input-bg)] border-none outline-none focus:outline focus:outline-[var(--primary)] outline-[2px]"
                placeholder="YOUR EMAIL"
                autoComplete={"disable"}
                name="email"
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 mt-2 pl-8 italic">{errors.email}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-2">
              <Field
                type="text"
                className="w-full rounded-full h-12 xl:h-14 px-10 bg-[var(--input-bg)] border-none outline-none focus:outline focus:outline-[var(--primary)] outline-[2px]"
                placeholder="YOUR SUBJECT"
                autoComplete={"disable"}
                name="subject"
              />
              {errors.subject && touched.subject ? (
                <p className="text-red-500 mt-2 pl-8 italic">
                  {errors.subject}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-span-2">
              <Field
                id=""
                as="textarea"
                placeholder="YOUR MESSAGE"
                autoComplete={"disable"}
                className="w-full rounded-3xl resize-none px-10 bg-[var(--input-bg)] border-none outline-none focus:outline focus:outline-[var(--primary)] outline-[2px] py-4 h-52 xl:h-60"
                name="message"
              />
              {errors.message && touched.message ? (
                <p className="text-red-500 mt-2 pl-8 italic">
                  {errors.message}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-6 flex-center md:justify-start">
            <button
              type="submit"
              className="group h-[50px] rounded-full relative transition-fade"
            >
              <div className="absolute h-[52px] w-[52px] bg-[var(--primary)] flex-center rounded-full -top-[1px] -left-[1px] group-hover:left-[calc(100%-50px)] transition-fade">
                <IoIosSend className="text-white text-xl" />
              </div>
              <p className="h-full rounded-full shadow-2xl flex-center pl-16 pr-6 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:pl-6 group-hover:pr-16 uppercase font-semibold text-lg transition-fade outline outline-[2px] outline-[var(--primary)]">
                send message
              </p>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
