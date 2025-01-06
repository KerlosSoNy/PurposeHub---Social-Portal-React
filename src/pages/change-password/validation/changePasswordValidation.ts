import * as yup from "yup";


export const changePasswordValidation = yup.object().shape({
    password: yup.string().required("Please enter your password"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords do not match")
        .required("Please enter your confirm password"),
});