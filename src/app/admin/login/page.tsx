"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUiStore } from "@/lib/store";
import { copy } from "@/lib/i18n";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(3),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { language } = useUiStore();
  const t = copy[language];

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginInput) => {
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      setError("Invalid login credentials.");
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#F7F8FA] px-4 py-10 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-3xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">{t.nav.admin} Login</h1>
        <p className="mt-2 text-sm text-slate-600">{t.page.contactLead}</p>
        <form className="mt-6 space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-full rounded-xl border p-3" placeholder="Username" {...register("username")} />
          <input className="w-full rounded-xl border p-3" type="password" placeholder="Password" {...register("password")} />
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button className="w-full rounded-xl bg-[#0B3D91] px-4 py-3 font-semibold text-white" disabled={isSubmitting}>
            {isSubmitting ? "..." : t.nav.admin}
          </button>
        </form>
      </div>
    </main>
  );
}
