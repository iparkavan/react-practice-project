export type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address_1: string;
  address_2: string;
  location: string;
  pin_code: string;
  profile_image: File | null;
  country: string;
  gender: string;
  hobbies: string[];
};

export type FormErrors = Partial<Record<keyof FormData, string>>;
