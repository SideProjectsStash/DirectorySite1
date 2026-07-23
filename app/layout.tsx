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
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            Directory
          </Link>
          <nav>
            <Link href="/">Listings</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Directory Site</p>
        </footer>
      </body>
    </html>
  );
}
