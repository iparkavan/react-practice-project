import { FormData, FormErrors } from "../types/multi-step-form";

export const userFieldsValidation = (data: FormData) => {
  const errors: FormErrors = {};

  if (!data.first_name.trim()) errors.first_name = "First name is required";
  if (!data.last_name.trim()) errors.last_name = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email))
    errors.email = "Invalid email format";
  if (!data.password || data.password.length < 6)
    errors.password = "Password must be at least 6 characters";
  return errors;
};

export const addressFieldValidation = (data: FormData) => {
  const errors: FormErrors = {};
  if (!data.address_1.trim()) errors.address_1 = "Address line 1 is required";
  if (!data.address_1.trim()) errors.address_2 = "Address line 2 is required";
  if (!data.location.trim()) errors.location = "Location is required";
  if (!data.pin_code.trim() || !/^\d{6}$/.test(data.pin_code))
    errors.pin_code = "Pin code must be 6 digits";
  return errors;
};

export const personalFieldValidation = (data: FormData) => {
  const errors: FormErrors = {};
  if (!data.profile_image) errors.profile_image = "Profile Image is required";
  if (!data.country) errors.country = "Country is required";
  if (!data.gender) errors.gender = "Gender is required";
  if (data.hobbies.length === 0)
    errors.hobbies = "At least one hobby is required";
  return errors;
};
