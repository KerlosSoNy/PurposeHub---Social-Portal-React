import * as yup from "yup"

export const completeProfileValidation = yup.object().shape({
    cover: yup.string().required("Please upload your cover image"),
    profile: yup.string().required("Please upload your profile image"),
    bio: yup.string().required("Please bio is required"),
})