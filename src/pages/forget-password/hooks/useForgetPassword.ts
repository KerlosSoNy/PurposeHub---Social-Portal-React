import { useState } from "react"
import * as Yup from "yup";
import { forgetPasswordSchema } from "../validation/forgetPasswordSchema";
import { useNavigate } from "react-router";

export function useForgetPassword() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [data, setData] = useState<{ email: string, }>({
        email: "",
    })
    const navigate = useNavigate();
    const [error, setErrors] = useState<{ email: string,}>({
        email: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        setErrors({
            email: "",
        });
        try {
            await forgetPasswordSchema.validate(data, { abortEarly: false });
            setTitle("Email sent successfully")
            setBody("Check your email")
            setShowSuccessToast(true)
            navigate('/change-password')
        }
        catch (error: unknown) {
            if (error instanceof Yup.ValidationError) {
                const validation: { email: string} = {
                    email: "",
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