import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Easybills',
  description: 'Transfer bills comfortably from your location',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
