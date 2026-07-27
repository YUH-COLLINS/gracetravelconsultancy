import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(6),
  preferredDate: z.string().min(3),
  serviceInterest: z.string().min(2),
  message: z.string().min(8),
});

export const inquirySchema = z.object({
  inquiryType: z.string().min(2),
  service: z.string().min(2),
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(6),
  details: z.string().min(8),
  travelDate: z.string().optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
});

export const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(6),
  country: z.string().min(2),
  level: z.string().min(2),
  intake: z.string().min(2),
  budgetRange: z.string().min(2),
  passportStatus: z.string().min(2),
  notes: z.string().min(8),
});

export const blogSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  category: z.string().min(2),
  imageUrl: z.string().url().optional().or(z.literal("")),
  published: z.boolean().optional().default(true),
});

export const testimonialSchema = z.object({
  fullName: z.string().min(2),
  country: z.string().min(2),
  category: z.string().min(2),
  quote: z.string().min(10),
  rating: z.number().int().min(1).max(5),
  imageUrl: z.string().url().optional().or(z.literal("")),
  approved: z.boolean().optional().default(true),
});

export const newsletterSchema = z.object({
  email: z.email(),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
export type InquiryInput = z.infer<typeof inquirySchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
export type BlogInput = z.infer<typeof blogSchema>;
export type TestimonialInput = z.infer<typeof testimonialSchema>;
