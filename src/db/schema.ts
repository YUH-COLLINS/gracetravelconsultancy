import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  preferredDate: varchar("preferred_date", { length: 40 }).notNull(),
  serviceInterest: varchar("service_interest", { length: 100 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  country: varchar("country", { length: 80 }).notNull(),
  level: varchar("level", { length: 80 }).notNull(),
  intake: varchar("intake", { length: 80 }).notNull(),
  budgetRange: varchar("budget_range", { length: 80 }).notNull(),
  passportStatus: varchar("passport_status", { length: 80 }).notNull(),
  notes: text("notes").notNull(),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  inquiryType: varchar("inquiry_type", { length: 80 }).notNull(),
  service: varchar("service", { length: 80 }).notNull(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  details: text("details").notNull(),
  travelDate: varchar("travel_date", { length: 40 }),
  budget: varchar("budget", { length: 80 }),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 180 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: varchar("category", { length: 80 }).notNull(),
  imageUrl: text("image_url"),
  published: boolean("published").notNull().default(true),
  views: integer("views").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  country: varchar("country", { length: 80 }).notNull(),
  category: varchar("category", { length: 80 }).notNull(),
  quote: text("quote").notNull(),
  rating: integer("rating").notNull().default(5),
  imageUrl: text("image_url"),
  approved: boolean("approved").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 160 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
