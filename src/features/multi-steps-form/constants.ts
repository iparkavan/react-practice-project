export type FieldProps = {
  type: "textbox" | "selectbox" | "checkbox" | "radio" | "file";
  fieldType?: string;
  name: string;
  label: string;
  option?: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  col: number;
  isRequired?: boolean;
  isHide?: boolean;
  isDisable?: boolean;
};

export const userInfoFields = (): FieldProps[] => [
  {
    type: "textbox",
    fieldType: "text",
    name: "first_name",
    label: "First Name",
    placeholder: "Enter your first name",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "text",
    name: "last_name",
    label: "Last Name",
    placeholder: "Enter your last name",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email name",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
];

export const addressFields = (): FieldProps[] => [
  {
    type: "textbox",
    fieldType: "text",
    name: "address_1",
    label: "Address Line 1",
    placeholder: "Enter address",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "text",
    name: "address_2",
    label: "Address Line 2",
    placeholder: "Enter address",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "text",
    name: "location",
    label: "Location",
    placeholder: "Enter your location",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "textbox",
    fieldType: "text",
    name: "pin_code",
    label: "Pin code",
    placeholder: "Enter your pincode",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
];

export const personalFields = (): FieldProps[] => [
  {
    type: "file",
    fieldType: "file",
    name: "profile_image",
    label: "Profile Image",
    placeholder: "",
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "selectbox",
    fieldType: "selectbox",
    name: "country",
    label: "Country",
    placeholder: "Enter your country",
    option: [
      {
        label: "United States",
        value: "USA",
      },
      {
        label: "Canada",
        value: "CA",
      },
      {
        label: "United Kingdom",
        value: "UK",
      },
      {
        label: "India",
        value: "IN",
      },
    ],
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "radio",
    fieldType: "radio",
    name: "gender",
    label: "Gender",
    placeholder: "Enter your gender",
    option: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
  {
    type: "checkbox",
    fieldType: "text",
    name: "hobbies",
    label: "Hobbies",
    placeholder: "",
    option: [
      { value: "reading", label: "Reading" },
      { value: "traveling", label: "Traveling" },
      { value: "sports", label: "Sports" },
    ],
    col: 4,
    isHide: false,
    isRequired: true,
    isDisable: false,
  },
];
