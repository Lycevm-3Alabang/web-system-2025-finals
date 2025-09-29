import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Student Task Assignment",
  description: "Random task distribution system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
