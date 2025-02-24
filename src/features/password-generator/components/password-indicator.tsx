// 📁 src/utils/passwordUtils.ts

export const getPasswordStrength = (password: string) => {
  const passwordLength = password.length;

  switch (true) {
    case passwordLength <= 4:
      return { title: "Very Weak", color: "red-500" };
    case passwordLength <= 8:
      return { title: "Weak", color: "red-500" };
    case passwordLength <= 12:
      return { title: "Medium", color: "yellow-500" };
    case passwordLength <= 16:
      return { title: "Strong", color: "green-500" };
    case passwordLength <= 20:
      return { title: "Very Strong", color: "green-500" };
    default:
      return { title: "Strong", color: "green-500" };
  }
};
