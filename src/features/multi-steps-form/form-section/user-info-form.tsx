import React from "react";
import { CustomFormFields } from "@/components/custom-form-fields";
import { userInfoFields } from "../constants";
import { FormData, FormErrors } from "../types/multi-step-form";

interface UserInfoFormProps {
  data: Record<string, string | number | string[] | boolean | File | null>;
  handleChange: (
    name: keyof FormData,
    value: string | number | boolean | File | null
  ) => void;
  errors: FormErrors;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  data,
  handleChange,
  errors,
}) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <CustomFormFields
        fields={userInfoFields()}
        formData={data}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default UserInfoForm;
