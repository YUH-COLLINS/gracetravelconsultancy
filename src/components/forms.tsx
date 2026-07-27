"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { applicationSchema, consultationSchema, inquirySchema, newsletterSchema } from "@/lib/validation";
import type { ApplicationInput, ConsultationInput, InquiryInput } from "@/lib/validation";

export function ConsultationForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (values: ConsultationInput) => {
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Submission failed");
    setDone(true);
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="w-full rounded-xl border p-3" placeholder="Full Name" {...register("fullName")} />
      <p className="text-xs text-rose-600">{errors.fullName?.message}</p>
      <input className="w-full rounded-xl border p-3" placeholder="Email" {...register("email")} />
      <p className="text-xs text-rose-600">{errors.email?.message}</p>
      <input className="w-full rounded-xl border p-3" placeholder="Phone" {...register("phone")} />
      <input className="w-full rounded-xl border p-3" type="date" {...register("preferredDate")} />
      <input className="w-full rounded-xl border p-3" placeholder="Service Interest (Visa, Study, Flight...)" {...register("serviceInterest")} />
      <textarea className="h-24 w-full rounded-xl border p-3" placeholder="Message" {...register("message")} />
      <button className="w-full rounded-xl bg-[#0B3D91] px-4 py-3 font-semibold text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book Consultation"}
      </button>
      {done && <p className="text-sm text-emerald-700">Consultation request submitted successfully.</p>}
    </form>
  );
}

export function StudyApplicationForm({ countryDefault }: { countryDefault?: string }) {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      country: countryDefault ?? "",
      level: "",
      intake: "",
      budgetRange: "",
      passportStatus: "",
      notes: "",
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: ApplicationInput) => {
    const res = await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Submission failed");
    setDone(true);
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded-xl border p-3" placeholder="Full Name" {...register("fullName")} />
        <input className="rounded-xl border p-3" placeholder="Email" {...register("email")} />
        <input className="rounded-xl border p-3" placeholder="Phone" {...register("phone")} />
        <input className="rounded-xl border p-3" placeholder="Country" {...register("country")} />
        <input className="rounded-xl border p-3" placeholder="Level (BSc, MSc...)" {...register("level")} />
        <input className="rounded-xl border p-3" placeholder="Intake" {...register("intake")} />
        <input className="rounded-xl border p-3" placeholder="Budget Range" {...register("budgetRange")} />
        <input className="rounded-xl border p-3" placeholder="Passport Status" {...register("passportStatus")} />
      </div>
      <textarea className="h-24 w-full rounded-xl border p-3" placeholder="Additional notes" {...register("notes")} />
      <p className="text-xs text-rose-600">{Object.values(errors)[0]?.message as string | undefined}</p>
      <button className="rounded-xl bg-[#0B3D91] px-4 py-3 font-semibold text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
      {done && <p className="text-sm text-emerald-700">Application submitted successfully.</p>}
    </form>
  );
}

export function GeneralInquiryForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: "General Contact",
      service: "General",
      fullName: "",
      email: "",
      phone: "",
      details: "",
      travelDate: "",
      budget: "",
    },
  });

  const onSubmit = async (values: InquiryInput) => {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Submission failed");
    setDone(true);
    reset();
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("inquiryType")} />
      <input type="hidden" {...register("service")} />
      <input className="w-full rounded-xl border p-3" placeholder="Full Name" {...register("fullName")} />
      <input className="w-full rounded-xl border p-3" placeholder="Email" {...register("email")} />
      <input className="w-full rounded-xl border p-3" placeholder="Phone" {...register("phone")} />
      <textarea className="h-28 w-full rounded-xl border p-3" placeholder="How can we help?" {...register("details")} />
      <p className="text-xs text-rose-600">{Object.values(errors)[0]?.message as string | undefined}</p>
      <button className="rounded-xl bg-[#0B3D91] px-4 py-3 font-semibold text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Inquiry"}
      </button>
      {done && <p className="text-sm text-emerald-700">Inquiry sent successfully.</p>}
    </form>
  );
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setMessage("Please enter a valid email.");
      return;
    }

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setEmail("");
      setMessage("Subscribed successfully.");
    }
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3"
        placeholder="Your email"
      />
      <button onClick={submit} className="rounded-xl bg-[#D4AF37] px-4 py-3 font-semibold text-slate-900">
        Subscribe
      </button>
      {message && <p className="text-xs text-slate-600">{message}</p>}
    </div>
  );
}
