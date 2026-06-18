"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AuthSuccessPage() {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      if (status === "loading") return;

      if (!session) {
        router.replace("/auth/login");
        return;
      }

      try {
        const response = await fetch("/api/auth/google-login", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: session.user.email,
          }),
        });

        const result = await response.json();

        if (!result.success) {
          router.replace("/auth/login");
          return;
        }

        if (result.user.role === "owner") {
          router.replace("/admin/dashboard");
        } else {
          router.replace("/customer/dashboard");
        }
      } catch (error) {
        console.log(error);

        router.replace("/auth/login");
      }
    };

    handleGoogleLogin();
  }, [session, status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-900">Signing You In</h1>

        <p className="mt-3 text-slate-500">
          Creating secure session and redirecting...
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
