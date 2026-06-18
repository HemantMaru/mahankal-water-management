import { getMe, login, register } from "@/services/auth.api";

export const useAuth = () => {
  const handleRegister = async (Data) => {
    try {
      const response = await register(Data);
      return response;
    } catch (error) {
      console.log("Registration error:", error);
      throw error;
    }
  };

  const handleLogin = async (Data) => {
    try {
      const response = await login(Data);
      return response;
    } catch (error) {
      console.log("Login error:", error);
      throw error;
    }
  };

  const handleGetMe = async () => {
    try {
      const response = await getMe();
      return response;
    } catch (error) {
      console.log("GetMe error:", error);
      throw error;
    }
  };
  return {
    handleRegister,
    handleLogin,
    handleGetMe,
  };
};
