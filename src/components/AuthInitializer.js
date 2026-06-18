"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "@/store/authSlice";

import { getMe } from "@/services/auth.api.js";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getMe();

        if (response.success) {
          dispatch(setUser(response.user));
        }
      } catch {}
    };

    init();
  }, []);

  return null;
}
