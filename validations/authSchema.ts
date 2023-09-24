import * as yup from 'yup';

export const registerSchema = yup.object({
    name: yup.string().required().min(6).max(14),
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(14),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirm password not macted").required()
})
.required()


export type ResgiterType = yup.InferType<typeof registerSchema>


export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(14),
})
.required()


export type LoginType = yup.InferType<typeof loginSchema>
