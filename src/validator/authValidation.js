import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username cannot exceed 50 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});