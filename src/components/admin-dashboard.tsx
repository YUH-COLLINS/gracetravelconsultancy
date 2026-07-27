"use client";

import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

async function get<T>(url: string): Promise<T> {
  const res = await axios.get<T>(url);
  return res.data;
}

export function AdminDashboard() {
  const queryClient = useQueryClient();
  const { language } = useUiStore();
  const t = copy[language];
  const [blogForm, setBlogForm] = useState({ title: "", slug: "", excerpt: "", content: "", category: "Visa Updates", imageUrl: "", published: true });
  const [testimonialForm, setTestimonialForm] = useState({ fullName: "", country: "", category: "Student Success", quote: "", rating: 5, imageUrl: "", approved: true });

  const overview = useQuery({ queryKey: ["admin-overview"], queryFn: () => get<Record<string, number>>("/api/admin/overview") });
  const consultations = useQuery({ queryKey: ["consultations"], queryFn: () => get<any[]>("/api/consultations") });
  const applications = useQuery({ queryKey: ["applications"], queryFn: () => get<any[]>("/api/applications") });
  const inquiries = useQuery({ queryKey: ["inquiries"], queryFn: () => get<any[]>("/api/inquiries") });
  const blogs = useQuery({ queryKey: ["blogs"], queryFn: () => get<any[]>("/api/blog?admin=1") });
  const testimonials = useQuery({ queryKey: ["testimonials"], queryFn: () => get<any[]>("/api/testimonials?admin=1") });

  const createBlog = useMutation({
    mutationFn: async () => axios.post("/api/blog", blogForm),
    onSuccess: () => {
      setBlogForm({ title: "", slug: "", excerpt: "", content: "", category: "Visa Updates", imageUrl: "", published: true });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["admin-overview"] });
    },
  });

  const deleteBlog = useMutation({
    mutationFn: async (id: number) => axios.delete(`/api/blog/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["admin-overview"] });
    },
  });

  const createTestimonial = useMutation({
    mutationFn: async () => axios.post("/api/testimonials", testimonialForm),
    onSuccess: () => {
      setTestimonialForm({ fullName: "", country: "", category: "Student Success", quote: "", rating: 5, imageUrl: "", approved: true });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["admin-overview"] });
    },
  });

  const deleteTestimonial = useMutation({
    mutationFn: async (id: number) => axios.delete(`/api/testimonials/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["admin-overview"] });
    },
  });

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  const chartData = overview.data
    ? [
        { name: "Consult", value: overview.data.consultations || 0 },
        { name: "Apps", value: overview.data.applications || 0 },
        { name: "Inquiries", value: overview.data.inquiries || 0 },
        { name: "Posts", value: overview.data.blogPosts || 0 },
        { name: "Reviews", value: overview.data.testimonials || 0 },
      ]
    : [];

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-10 md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-slate-900">{t.nav.admin} Dashboard</h1>
        <button onClick={logout} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">{t.nav.admin} Logout</button>
      </div>

      <section className="grid gap-4 md:grid-cols-5">
        {Object.entries(overview.data ?? {}).map(([key, value]) => (
          <div key={key} className="rounded-2xl border bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">{key}</p>
            <p className="mt-2 text-2xl font-semibold text-[#0B3D91]">{value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border bg-white p-4 md:p-6">
        <h2 className="text-xl font-semibold">Website Analytics Snapshot</h2>
        <div className="mt-4 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#0B3D91" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border bg-white p-5">
          <h2 className="text-xl font-semibold">Create Blog Post</h2>
          <div className="mt-4 space-y-2">
            <input className="w-full rounded border p-2" placeholder="Title" value={blogForm.title} onChange={(e) => setBlogForm((s) => ({ ...s, title: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Slug" value={blogForm.slug} onChange={(e) => setBlogForm((s) => ({ ...s, slug: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Category" value={blogForm.category} onChange={(e) => setBlogForm((s) => ({ ...s, category: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Image URL" value={blogForm.imageUrl} onChange={(e) => setBlogForm((s) => ({ ...s, imageUrl: e.target.value }))} />
            <textarea className="h-20 w-full rounded border p-2" placeholder="Excerpt" value={blogForm.excerpt} onChange={(e) => setBlogForm((s) => ({ ...s, excerpt: e.target.value }))} />
            <textarea className="h-32 w-full rounded border p-2" placeholder="Content" value={blogForm.content} onChange={(e) => setBlogForm((s) => ({ ...s, content: e.target.value }))} />
            <button className="rounded bg-[#0B3D91] px-4 py-2 text-white" onClick={() => createBlog.mutate()}>Create Post</button>
          </div>
          <div className="mt-5 space-y-2">
            {blogs.data?.map((post) => (
              <div key={post.id} className="flex items-center justify-between rounded border p-2 text-sm">
                <span>{post.title}</span>
                <button className="text-rose-600" onClick={() => deleteBlog.mutate(post.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-5">
          <h2 className="text-xl font-semibold">Create Testimonial</h2>
          <div className="mt-4 space-y-2">
            <input className="w-full rounded border p-2" placeholder="Full Name" value={testimonialForm.fullName} onChange={(e) => setTestimonialForm((s) => ({ ...s, fullName: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Country" value={testimonialForm.country} onChange={(e) => setTestimonialForm((s) => ({ ...s, country: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Category" value={testimonialForm.category} onChange={(e) => setTestimonialForm((s) => ({ ...s, category: e.target.value }))} />
            <input className="w-full rounded border p-2" placeholder="Image URL" value={testimonialForm.imageUrl} onChange={(e) => setTestimonialForm((s) => ({ ...s, imageUrl: e.target.value }))} />
            <input className="w-full rounded border p-2" type="number" min={1} max={5} value={testimonialForm.rating} onChange={(e) => setTestimonialForm((s) => ({ ...s, rating: Number(e.target.value) }))} />
            <textarea className="h-24 w-full rounded border p-2" placeholder="Quote" value={testimonialForm.quote} onChange={(e) => setTestimonialForm((s) => ({ ...s, quote: e.target.value }))} />
            <button className="rounded bg-[#0B3D91] px-4 py-2 text-white" onClick={() => createTestimonial.mutate()}>Create Testimonial</button>
          </div>
          <div className="mt-5 space-y-2">
            {testimonials.data?.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded border p-2 text-sm">
                <span>{item.fullName}</span>
                <button className="text-rose-600" onClick={() => deleteTestimonial.mutate(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <RecordTable title="Consultations" rows={consultations.data ?? []} fields={["fullName", "email", "phone", "serviceInterest", "createdAt"]} />
        <RecordTable title="Applications" rows={applications.data ?? []} fields={["fullName", "country", "level", "intake", "createdAt"]} />
        <RecordTable title="Inquiries" rows={inquiries.data ?? []} fields={["inquiryType", "service", "fullName", "email", "createdAt"]} />
      </section>
    </main>
  );
}

function RecordTable({ title, rows, fields }: { title: string; rows: any[]; fields: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 space-y-2">
        {rows.slice(0, 10).map((row) => (
          <div key={row.id} className="rounded border p-2 text-xs">
            {fields.map((field) => (
              <p key={field}><span className="font-semibold">{field}: </span>{String(row[field] ?? "-")}</p>
            ))}
          </div>
        ))}
        {!rows.length && <p className="text-sm text-slate-500">No records yet.</p>}
      </div>
    </div>
  );
}
