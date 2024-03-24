import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Easybills / signup',
  description: 'Transfer bills comfortably from your location',
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
