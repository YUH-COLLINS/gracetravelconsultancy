"use client";

import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function BlogContent({ posts }: { posts: { id: number; title: string; excerpt: string; category: string; createdAt: string }[] }) {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-semibold text-slate-900">{t.page.blogTitle}</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-wider text-[#00AEEF]">{post.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <p className="mt-3 text-xs text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </article>
        ))}
        {!posts.length && <p className="text-sm text-slate-600">{t.common.noPosts}</p>}
      </div>
    </main>
  );
}
