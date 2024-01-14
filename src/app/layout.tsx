import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Pixel Point",
  description: "Test Pixel Point",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
