import { useState } from "react"
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { changePasswordValidation } from "../validation/changePasswordValidation";

export function useChangePassword() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [data, setData] = useState<{ password: string, confirm_password: string }>({
        password: "",
        confirm_password: ""
    })
    const navigate = useNavigate();
    const [error, setErrors] = useState<{ password: string, confirm_password: string }>({
        password: "",
        confirm_password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        setErrors({
            password: "",
            confirm_password: ""
        });
        try {
            await changePasswordValidation.validate(data, { abortEarly: false });
            setTitle("Password changed successfully")
            setBody("Welcome back")
            navigate('/')
            setShowSuccessToast(true)
        }
        catch (error: unknown) {
            if (error instanceof Yup.ValidationError) {
                const validation: { password: string, confirm_password: string } = {
                    password: "",
                    confirm_password: ""
                };
                error.inner.forEach((err: Yup.ValidationError) => {
                    if (err.path) {
                        // @ts-ignore
                        validation[err.path as keyof ValidationErrors] = err.message;
                    }
                });
                setTitle("Error in validation")
                setBody("Please check all inputs")
                setShowErrorToast(true)
                setErrors(validation);
            }
        }
    };

    return {
        data,
        handleChange,
        error,
        handleSubmit,
        setShowErrorToast,
        setShowSuccessToast,
        showErrorToast,
        showSuccessToast,
        title, body
    }
}