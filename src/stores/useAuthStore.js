import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { authApi } from "../api/authApi";
import { createAlert } from "../utils/createAlert"

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",
      isAuthenticated: false,
      login: async (input) => {
        try {
          const rs = await authApi.post("/login", input);
          const { payload, token } = rs.data;
          set({ token, user: payload, isAuthenticated: true });
          createAlert("success", rs.data.message || "Logged in successfully!");
          return { success: true, role: payload.role };
        } catch (error) {
          console.error("Login Error:", error.response?.data || error.message);
          const errorMessage =
            error.response?.data?.message ||
            "Login failed. Please check your credentials.";
          createAlert("error", errorMessage);
          return { success: false, message: errorMessage };
        }
      },
      register: async (input) => {
        try {
          const rs = await authApi.post("/register", input);
          const {payload, token} = rs.data
          set({token, user: payload, isAuthenticated: true})
          createAlert("success", rs.data.message || "Register successful!");
          return { success: true, role: payload.role};
        } catch (error) {
          console.error(
            "Registration Error:",
            error.response?.data || error.message
          );
          const errorMessage =
            error.response?.data?.message ||
            "Registration failed. Please try again.";
          createAlert("error", errorMessage);
          return { success: false, message: errorMessage };
        }
      },
      logout: () => {
        set({ token: "", user: null, isAuthenticated: false });
        localStorage.removeItem("userState");
        createAlert("info", "You have been logged out.");
      },
    }),
    { name: "userState", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAuthStore;
