import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  href: string;
};

export function BlogCard({ title, excerpt, href }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coastal">Guide</p>
      <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{excerpt}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-bold text-coastal hover:text-charcoal">
        Read guide
      </Link>
    </article>
  );
}
