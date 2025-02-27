"use client";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./Header";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Header />

      <main>{children}</main>
    </ClerkProvider>
  );
}
