import { useCallback, useState } from "react"
import * as yup from "yup";
import { useNavigate } from "react-router";
import { signUpValidation } from "../validation/signupValidation";

export function useSignUp() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false)
    const [data, setData] = useState<{
        full_name: string, birthday: string, gender_id: string,
        email: string, password: string
    }>({
        full_name: "",
        birthday: "",
        gender_id: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{
        email: string, password: string
    }[]>([]);
    const [error, setError] = useState<{
        full_name: string, birthday: string, gender_id: string,
        email: string, password: string
    }>({
        full_name: "",
        birthday: "",
        gender_id: "",
        email: "",
        password: ""
    });
    console.log(data)
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
        await validatePassword(event.target.value)
    };


    const validatePassword = useCallback(async (value: string) => {
        try {
            await signUpValidation.validate({ password: value }, { abortEarly: false });
            setErrors([]);
            return true;
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                // @ts-ignore
                setErrors(err.inner.map(e => ({
                    path: e.path || '',
                    message: e.message
                })));
            }
            return false;
        }
    }, []);

    const getPasswordStrength = useCallback((password: string): string => {
        console.log(password.length)
        if (password.length < 8) {
            return 'Weak';
        } else if (password.length >= 8 && password.length < 12) {
            return 'Medium';
        } else {
            return 'Strong';
        }
    }, [data?.password]);

    let strength = getPasswordStrength(data?.password);

    const requirements = [
        { message: 'At least 8 characters', valid: !errors.some((e: any) => e.message.includes('8 characters')) },
        { message: 'Contains a number or symbol', valid: !errors.some((e: any) => e.message.includes('number or symbol')) },
        { message: 'Cannot contain personal info', valid: !errors.some((e: any) => e.message.includes('personal info')) }
    ];

    const handleSubmit = async () => {
        setError({
            full_name: "",
            birthday: "",
            gender_id: "",
            email: "",
            password: ""
        });
        try {
            await signUpValidation.validate(data, { abortEarly: false });
            setTimeout(() => {
                navigate('/home')
            }, 4000)
            setTitle("Sign up successfully")
            setBody("Welcome")
            setChecked(true)
            setShowSuccessToast(true)
        }
        catch (error: unknown) {
            if (error instanceof yup.ValidationError) {
                const validation: { full_name: string, birthday: string, gender_id: string, email: string, password: string } = {
                    email: "",
                    password: "",
                    full_name: "",
                    birthday: "",
                    gender_id: "",
                };
                error.inner.forEach((err: yup.ValidationError) => {
                    if (err.path) {
                        // @ts-ignore
                        validation[err.path as keyof ValidationErrors] = err.message;
                    }
                });
                setTitle("Error in validation")
                setBody("Please check all inputs")
                setShowErrorToast(true)
                setError(validation);
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
        showErrorToast, setData,
        showSuccessToast,
        title, body, checked,

        requirements, strength, getPasswordStrength
    }
}