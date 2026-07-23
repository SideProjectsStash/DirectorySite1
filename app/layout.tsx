import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Directory Site",
  description: "A simple directory of businesses and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg font-sans leading-[1.6] text-fg">
        <header className="mx-auto flex max-w-[900px] items-center justify-between gap-4 border-b border-border px-6 py-5">
          <Link href="/" className="text-lg font-bold text-fg hover:underline">
            Directory
          </Link>
          <nav>
            <Link href="/" className="text-accent hover:underline">
              Listings
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-[900px] px-6 pt-8 pb-16">{children}</main>
        <footer className="mx-auto max-w-[900px] border-t border-border p-6 text-sm text-muted">
          <p className="my-[1em]">
            &copy; {new Date().getFullYear()} Directory Site
          </p>
        </footer>
      </body>
    </html>
  );
}
