// app/layout.tsx
import type { Metadata } from 'next';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: 'Next.js Dashboard',
  description: 'Chapter 2 — CSS Styling demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
