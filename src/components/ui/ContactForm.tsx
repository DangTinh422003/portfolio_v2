"use client";
import React from "react";
import { IoIosSend } from "react-icons/io";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  visible: {
    y: [30, -10, 0],
    opacity: [0, 1],
  },
};

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
    formikHelpers: FormikHelpers<IContactForm>,
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
          <div className="grid grid-cols-2 gap-4 md:gap-y-4 xl:gap-6">
            <motion.div
              className="col-span-2 md:col-span-1"
              variants={variants}
              whileInView={"visible"}
              animate={"visible"}
              transition={{ delay: 0.1 }}
            >
              <Field
                type="text"
                className="h-12 w-full rounded-full border-none bg-[var(--input-bg)] px-10 outline-none outline-2 focus:outline focus:outline-[var(--primary)] xl:h-14"
                placeholder="YOUR NAME"
                autoComplete={"disable"}
                name="username"
              />
              {errors.username && touched.username ? (
                <p className="mt-2 pl-8 italic text-red-500">
                  {errors.username}
                </p>
              ) : (
                <></>
              )}
            </motion.div>
            <motion.div
              className="col-span-2 md:col-span-1"
              variants={variants}
              whileInView={"visible"}
              animate={"visible"}
              transition={{ delay: 0.2 }}
            >
              <Field
                type="text"
                className="h-12 w-full rounded-full border-none bg-[var(--input-bg)] px-10 outline-none outline-2 focus:outline focus:outline-[var(--primary)] xl:h-14"
                placeholder="YOUR EMAIL"
                autoComplete={"disable"}
                name="email"
              />
              {errors.email && touched.email ? (
                <p className="mt-2 pl-8 italic text-red-500">{errors.email}</p>
              ) : (
                <></>
              )}
            </motion.div>
            <motion.div
              className="col-span-2"
              variants={variants}
              whileInView={"visible"}
              animate={"visible"}
              transition={{ delay: 0.3 }}
            >
              <Field
                type="text"
                className="h-12 w-full rounded-full border-none bg-[var(--input-bg)] px-10 outline-none outline-2 focus:outline focus:outline-[var(--primary)] xl:h-14"
                placeholder="YOUR SUBJECT"
                autoComplete={"disable"}
                name="subject"
              />
              {errors.subject && touched.subject ? (
                <p className="mt-2 pl-8 italic text-red-500">
                  {errors.subject}
                </p>
              ) : (
                <></>
              )}
            </motion.div>
            <motion.div
              className="col-span-2"
              variants={variants}
              whileInView={"visible"}
              animate={"visible"}
              transition={{ delay: 0.4 }}
            >
              <Field
                id=""
                as="textarea"
                placeholder="YOUR MESSAGE"
                autoComplete={"disable"}
                className="h-52 w-full resize-none rounded-3xl border-none bg-[var(--input-bg)] px-10 py-4 outline-none outline-2 focus:outline focus:outline-[var(--primary)] xl:h-60"
                name="message"
              />
              {errors.message && touched.message ? (
                <p className="mt-2 pl-8 italic text-red-500">
                  {errors.message}
                </p>
              ) : (
                <></>
              )}
            </motion.div>
          </div>
          <div className="flex-center mt-6 md:justify-start">
            <motion.button
              type="submit"
              className="transition-fade group relative h-[50px] rounded-full"
              variants={variants}
              whileInView={"visible"}
              animate={"visible"}
              transition={{ delay: 0.5 }}
            >
              <div className="flex-center transition-fade absolute -left-px -top-px size-[52px] rounded-full bg-[var(--primary)] group-hover:left-[calc(100%-50px)]">
                <IoIosSend className="text-xl text-white" />
              </div>
              <p className="flex-center transition-fade h-full rounded-full pl-16 pr-6 text-lg font-semibold uppercase shadow-2xl outline outline-2 outline-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:pl-6 group-hover:pr-16 group-hover:text-white">
                send message
              </p>
            </motion.button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
