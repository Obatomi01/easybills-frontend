import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Easybills / login',
  description: 'Transfer bills comfortably from your location',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
