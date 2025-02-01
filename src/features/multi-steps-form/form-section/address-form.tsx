import { CustomFormFields } from "@/components/custom-form-fields";
import React from "react";
import { addressFields } from "../constants";
import { FormData, FormErrors } from "../types/multi-step-form";

interface AddressFormProps {
  data: Record<string, string | number | boolean | string[] | File | null>;
  handleChange: (
    name: keyof FormData,
    value: string | number | boolean | File | null
  ) => void;
  errors: FormErrors;
}

const AddressFrom: React.FC<AddressFormProps> = ({
  data,
  handleChange,
  errors,
}) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <CustomFormFields
        fields={addressFields()}
        formData={data}
        handleChange={handleChange}
        errors={errors}
      />
    </div>
  );
};

export default AddressFrom;
