import * as yup from 'yup';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const signUpValidation = yup.object().shape({
    full_name: yup.string().required("Please enter your full name"),
    birthday: yup.string().required("Please enter your birthday"),
    gender_id: yup.string().required("Please select your gender"),
    email: yup.string()
        .required("Please enter your email")
        .matches(emailRegex, "Please enter a valid email address"),
    password : yup.string()
        .required('Password is required')
        .min(8, 'Must be at least 8 characters')
        .matches(/[0-9!@#$%^&*(),.?":{}|<>]/, 'Must contain a number or symbol')
        .test('no-personal-info', 'Cannot contain personal info', 
        value => !value?.toLowerCase().includes('user'))
});

export interface ValidationError {
path: string;
message: string;
}

export const getStrengthColor = (strength: string): string => {
switch (strength) {
case 'Weak':
    return 'weak';
case 'Medium':
    return 'medium';
case 'Strong':
    return 'strong';
default:
    return 'text-gray-200';
}
};