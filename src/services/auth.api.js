import { api } from "@/instance";
export const register = async (data) => {
  try {
    const response = await api.post("/api/auth/register", data);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { success: false, message: "Registration failed" }
    );
    cache.error("Registration error:", error);
  }
};

export const login = async (data) => {
  try {
    const response = await api.post("/api/auth/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { success: false, message: "Login failed" };
    cache.error("Login error:", error);
  }
};

export const getMe = async () => {
  try {
    const response = await api.get("/api/auth/me");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch user details",
      }
    );
    cache.error("Fetch user error:", error);
  }
};
