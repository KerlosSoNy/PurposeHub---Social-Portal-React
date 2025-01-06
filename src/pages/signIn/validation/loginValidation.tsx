import * as yup from 'yup';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginValidation = yup.object().shape({
    email: yup.string()
        .required("Please enter your email")
        .matches(emailRegex, "Please enter a valid email address"),
    password: yup.string().required("Please enter your password"),
});