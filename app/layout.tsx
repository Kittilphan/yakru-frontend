import { MantineProvider } from '@mantine/core';
// import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider>{children}</MantineProvider>
    </html>
  );
}
