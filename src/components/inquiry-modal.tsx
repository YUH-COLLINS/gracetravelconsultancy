"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { inquirySchema, type InquiryInput } from "@/lib/validation";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  subServices: string[];
};

export function InquiryModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: "Service Inquiry",
      service: service.title,
      fullName: "",
      email: "",
      phone: "",
      details: "",
      travelDate: "",
      budget: "",
    },
  });

  async function onSubmit(values: InquiryInput) {
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) throw new Error("Could not submit inquiry");
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[60] bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="mx-auto grid h-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <div className="relative min-h-60 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
          <button className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white" onClick={onClose}>
            <X size={18} />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/80 to-transparent p-6 text-white">
            <h3 className="mt-20 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm text-white/90">{service.description}</p>
            <ul className="mt-4 list-inside list-disc text-sm text-white/90">
              {service.subServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-y-auto p-6">
          <h4 className="text-xl font-semibold text-slate-900">Quick Inquiry</h4>
          {submitted ? (
            <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700">
              Thank you. Our team will contact you shortly.
            </div>
          ) : (
            <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" {...register("inquiryType")} />
              <input type="hidden" {...register("service")} />
              <input className="w-full rounded-xl border p-3" placeholder="Full Name" {...register("fullName")} />
              <p className="text-xs text-rose-600">{errors.fullName?.message}</p>
              <input className="w-full rounded-xl border p-3" placeholder="Email" {...register("email")} />
              <p className="text-xs text-rose-600">{errors.email?.message}</p>
              <input className="w-full rounded-xl border p-3" placeholder="Phone" {...register("phone")} />
              <p className="text-xs text-rose-600">{errors.phone?.message}</p>
              <textarea className="h-28 w-full rounded-xl border p-3" placeholder="Tell us what you need" {...register("details")} />
              <p className="text-xs text-rose-600">{errors.details?.message}</p>
              <button
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#0B3D91] px-4 py-3 font-semibold text-white disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
