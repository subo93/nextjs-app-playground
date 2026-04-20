import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_componenets/Nav";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "A simple contact manager built with Next.js 13 and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
        <body>
          <div className="min-h-screen bg-white">
            <Nav/>
            <main className="container mx-auto px-4 py-8">{children}</main>        
          </div>
        </body>
    </html>
  );
}
