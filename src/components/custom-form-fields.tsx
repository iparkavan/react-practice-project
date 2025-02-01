import { FieldProps } from "@/features/multi-steps-form/constants";
import {
  FormData,
  FormErrors,
} from "@/features/multi-steps-form/types/multi-step-form";
import React, { ChangeEvent } from "react";

interface CustomFormFieldsProps {
  fields: FieldProps[];
  formData: Record<string, string | number | boolean | File | string[] | null>;
  handleChange: (
    name: keyof FormData,
    value: string | number | boolean | File | null
  ) => void;
  handleDeleteFile?: (name: string) => void;
  errors: FormErrors;
}

export const CustomFormFields: React.FC<CustomFormFieldsProps> = ({
  fields,
  formData,
  handleChange,
  handleDeleteFile,
  errors,
}) => {
  return (
    <>
      {fields.map(
        (field, index) =>
          !field.isHide && (
            <div
              className={`col-span-${field.col ?? 4}`}
              key={field.name || index}
            >
              <div className={`space-y-2`}>
                <p className="">
                  {field.label}
                  {field.isRequired && (
                    <span className="!text-[#FF0000]">&nbsp;*</span>
                  )}
                </p>
                {field.type === "textbox" && (
                  <>
                    <input
                      placeholder={field.placeholder || "Enter text"}
                      className="p-2 rounded-md bg-green-50 w-full"
                      type={field.fieldType || "text"}
                      value={(formData[field.name] as string) || ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChange(field.name, e.target.value)
                      }
                      disabled={field.isDisable || false}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500">{errors[field.name]}</p>
                    )}
                  </>
                )}
                {field.type === "selectbox" && (
                  <>
                    <select
                      className="p-2 rounded-md bg-green-50 w-full"
                      value={(formData[field.name] as string) || ""}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        handleChange(field.name, e.target.value)
                      }
                      disabled={field.isDisable || false}
                    >
                      <option>{field.placeholder}</option>
                      {field.option?.map((item, index) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                    {errors[field.name] && (
                      <p className="text-red-500">{errors[field.name]}</p>
                    )}
                  </>
                )}
                {field.type === "radio" && (
                  <div className="space-x-3">
                    {field.option?.map((item, index) => (
                      <React.Fragment key={item.value}>
                        <label htmlFor={item.value} className="cursor-pointer">
                          <input
                            type="radio"
                            id={item.value}
                            name={field.name}
                            value={item.value}
                            checked={formData[field.name] === item.value}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handleChange(field.name, e.target.value)
                            }
                            disabled={field.isDisable || false}
                            className="m-2 cursor-pointer"
                          />
                          {item.label}
                        </label>
                      </React.Fragment>
                    ))}
                    {errors[field.name] && (
                      <p className="text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                )}

                {field.type === "checkbox" && (
                  <div className="space-x-3">
                    {field.option?.map((item, index) => (
                      <React.Fragment key={item.value}>
                        <label
                          htmlFor={item.value}
                          key={item.value}
                          className="cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            id={item.value}
                            name={field.name}
                            value={item.value}
                            checked={(
                              (formData[field.name] as string[]) || []
                            ).includes(item.value)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              const value = item.value;
                              const selectedValues =
                                (formData[field.name] as string[]) || [];
                              const newValue = e.target.checked
                                ? [...selectedValues, value]
                                : selectedValues.filter(
                                    (check: string, index: any) =>
                                      check !== value
                                  );
                              handleChange(field.name, newValue);
                            }}
                            disabled={field.isDisable || false}
                            className="m-2 cursor-pointer"
                          />
                          {item.label}
                        </label>
                      </React.Fragment>
                    ))}
                    {errors[field.name] && (
                      <p className="text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                )}

                {field.type === "file" && (
                  <div>
                    <input
                      type="file"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files && e.target.files[0]) {
                          handleChange(field.name, e.target.files[0]);
                        }
                      }}
                      disabled={field.isDisable || false}
                    />
                    {formData[field.name] instanceof File &&
                      handleDeleteFile && (
                        <button onClick={() => handleDeleteFile(field.name)}>
                          Delete
                        </button>
                      )}
                    {errors[field.name] && (
                      <p className="text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                )}
                {/* Add more field types here as needed */}
              </div>
            </div>
          )
      )}
    </>
  );
};
