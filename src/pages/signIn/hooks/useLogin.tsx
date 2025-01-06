import { useState } from "react"
import * as Yup from "yup";
import { loginValidation } from "../validation/loginValidation";
import { useNavigate } from "react-router";

export function useLogin() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false)
    const [data, setData] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [error, setErrors] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
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
            password: "",
        });
        try {
            await loginValidation.validate(data, { abortEarly: false });
            setTimeout(() => {
                navigate('/home')
            }, 4000)
            setTitle("Log in successfully")
            setBody("Welcome Back")
            setChecked(true)
            setShowSuccessToast(true)
        }
        catch (error: unknown) {
            if (error instanceof Yup.ValidationError) {
                const validation: { email: string, password: string } = {
                    email: "",
                    password: "",
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
        title, body, checked
    }
}