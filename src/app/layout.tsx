import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/shared/Header";
import getMetadata from "../utils/get-metadata";

export const metadata: Metadata = getMetadata({
  robotsNoindex: "noindex",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
