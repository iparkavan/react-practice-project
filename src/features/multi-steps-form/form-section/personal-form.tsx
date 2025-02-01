import { CustomFormFields } from "@/components/custom-form-fields";
import React from "react";
import { personalFields } from "../constants";
import { FormData, FormErrors } from "../types/multi-step-form";

interface PersonalFormProps {
  data: Record<string, string | number | boolean | File | string[] | null>;
  handleChange: (
    name: keyof FormData,
    value: string | number | boolean | File | null
  ) => void;
  errors: FormErrors;
}

const PersonalForm: React.FC<PersonalFormProps> = ({
  data,
  handleChange,
  errors,
}) => {
  return (
    <div>
      <CustomFormFields
        fields={personalFields() || []}
        formData={data}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default PersonalForm;
